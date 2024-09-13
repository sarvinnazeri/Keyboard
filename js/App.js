const key = document.querySelectorAll('.row-1>div')
const key1 = document.querySelectorAll('.row-2>div')
const key2 = document.querySelectorAll('.row-3>div',)
const key3 = document.querySelectorAll('.row-4>div')
const screen = document.querySelector('.screen>p')
const btn = document.querySelector('button')
const Backspace = document.querySelector('#Backspace')
const Space = document.querySelector('#Space')
const Tab = document.querySelector('#Tab')
const Enter = document.querySelector('#Enter')
const capsLock = document.querySelector('#CapsLock');
const shift = document.querySelectorAll('#Shift');

btn.addEventListener('click', () => {
    screen.innerHTML = '';
})

Backspace.addEventListener('click', () => {
    if (screen.lastChild) {
        screen.removeChild(screen.lastChild);
    }
});
Space.addEventListener('click', () => {
    const span = document.createElement('span');
    span.innerHTML = '&nbsp;';
    screen.appendChild(span);

})
Tab.addEventListener('click', () => {
    const span = document.createElement('span')
    span.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'
    screen.appendChild(span)
})
Enter.addEventListener('click', () => {
    const br = document.createElement('br')
    screen.appendChild(br)
})

let caps = true;
capsLock.addEventListener('click', () => {
    caps = !caps
})
let status = true
shift.forEach((val) => {
    val.addEventListener('click', () => {
        status = !status;
    });
});



window.addEventListener('keydown', () => {

})


key.forEach((val, i) => {
    val.addEventListener('mousedown', (event) => {
        const span = document.createElement('span');
        if (event.shiftKey || status) {
            span.innerText = val.children[0].innerText;
        } else {
            span.innerText = val.children[1].innerText;
        }
        screen.appendChild(span);
    });
});


key1.forEach((val, i) => {
    val.addEventListener('mousedown', () => {
        const span = document.createElement('span');
        span.innerText = val.innerText;
        screen.appendChild(span);
        span.style.textTransform = caps ? 'uppercase' : 'lowercase';

    });
});


key2.forEach((val, i) => {
    val.addEventListener('mousedown', () => {
        const span = document.createElement('span');
        span.innerText = val.innerText;
        screen.appendChild(span);
        span.style.textTransform = caps ? 'uppercase' : 'lowercase';

    })
})
key3.forEach((val, i) => {
    val.addEventListener('mousedown', () => {
        const span = document.createElement('span');
        span.innerText = val.innerText;
        screen.appendChild(span);
        span.style.textTransform = caps ? 'uppercase' : 'lowercase';


    })
})
