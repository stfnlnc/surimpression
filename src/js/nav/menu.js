const menu = document.getElementById('menu')
const menuFirstChild = document.querySelector('#menu :nth-child(1)');
const menuSecondChild = document.querySelector('#menu :nth-child(2)');
let toggle = false;
const menuContainer = document.getElementById('menu-container')

menu.addEventListener('click', () => {
    toggle = !toggle
    navAnimate(menuFirstChild, menuSecondChild, toggle, menuContainer)
})

const tickets = document.getElementById('tickets')
const ticketsFirstChild = document.querySelector('#tickets :nth-child(1)');
const ticketsSecondChild = document.querySelector('#tickets :nth-child(2)');
let toggle2 = false;
const ticketsContainer = document.getElementById('tickets-container')

tickets.addEventListener('click', () => {
    toggle2 = !toggle2
    navAnimate(ticketsFirstChild, ticketsSecondChild, toggle2, ticketsContainer)
})

const surImp = document.getElementById('surimpression')

surImp.addEventListener('click', () => {
    toggle = false
    toggle2 = false
    setTimeout(() => {
        navAnimate(menuFirstChild, menuSecondChild, toggle, menuContainer)
    }, 300)
    navAnimate(ticketsFirstChild, ticketsSecondChild, toggle2, ticketsContainer)
})

function navAnimate(first, second, toggle, container) {
    if (toggle === true) {
        first.classList.remove('-translate-x-8')
        first.classList.remove('group-hover:translate-x-0')
        first.classList.add('translate-x-full')
        second.classList.add('-translate-x-8')
        second.classList.add('group-hover:translate-x-0')
        second.classList.remove('-translate-x-full')
        container.classList.remove('translate-x-full')
    } else {
        first.classList.add('-translate-x-8')
        first.classList.add('group-hover:translate-x-0')
        first.classList.remove('translate-x-full')
        second.classList.remove('-translate-x-8')
        second.classList.remove('group-hover:translate-x-0')
        second.classList.add('-translate-x-full')
        container.classList.add('translate-x-full')
    }
}