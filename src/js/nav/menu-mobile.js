const menuMobile = document.getElementById('menu-mobile')
const menuFirstChildMobile = document.querySelector('#menu-mobile :nth-child(1)');
const menuSecondChildMobile = document.querySelector('#menu-mobile :nth-child(2)');
const menuContainerMobile = document.getElementById('menu-container-mobile')
let toggle = false;

menuMobile.addEventListener('click', () => {
    toggle = !toggle
    navAnimateMobile(menuFirstChildMobile, menuSecondChildMobile, toggle, menuContainerMobile)
})

const ticketsMobile = document.getElementById('tickets-mobile')
const ticketsFirstChildMobile = document.querySelector('#tickets-mobile :nth-child(1)');
const ticketsSecondChildMobile = document.querySelector('#tickets-mobile :nth-child(2)');
const ticketsContainerMobile = document.getElementById('tickets-container-mobile')
let toggle2 = false;

ticketsMobile.addEventListener('click', () => {
    toggle2 = !toggle2
    navAnimateMobile(ticketsFirstChildMobile, ticketsSecondChildMobile, toggle2, ticketsContainerMobile)
})

function navAnimateMobile(first, second, toggle, container) {
    if (toggle === true) {
        first.classList.remove('translate-y-[0.8rem]')
        first.classList.add('translate-y-full')
        second.classList.add('translate-y-[0.8rem]')
        second.classList.remove('translate-y-full')
        container.classList.remove('-translate-y-full')
    } else {
        first.classList.add('translate-y-[0.8rem]')
        first.classList.remove('translate-y-full')
        second.classList.remove('translate-y-[0.8rem]')
        second.classList.add('translate-y-full')
        container.classList.add('-translate-y-full')

    }
}