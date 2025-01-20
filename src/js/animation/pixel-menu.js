import {getRandomInt} from "../inc/random-int.js";

const menu = document.getElementById('menu')

let toggle = false

let size = 30
if (window.innerWidth < 1024) {
    size = 25
} else if (window.innerWidth < 640) {
    size = 20
}

const menuContainer = document.querySelector("#menu-container")
const pixelMenuWidth = menuContainer.getBoundingClientRect().width
const pixelMenuHeight = menuContainer.getBoundingClientRect().height
let pixelMenuSize = menuContainer.getBoundingClientRect().width / size
const numMenuCols = Math.ceil(pixelMenuWidth / pixelMenuSize)
const numMenuRows = Math.ceil(pixelMenuHeight / pixelMenuSize)
const numMenuPixels = numMenuCols * numMenuRows
let pixelsMenu = []

menu.addEventListener('click', () => {
    toggle = !toggle
    if (toggle) {
        function createMenuPixels(pixelMenuContainer, key) {
            for (let i = 0; i < numMenuPixels; i++) {
                const pixelMenu = document.createElement("div")
                pixelMenu.classList.add('pixel-menu')
                pixelMenuContainer.appendChild(pixelMenu)
                pixelMenu.style.width = pixelMenuSize + 'px'
                pixelMenu.style.height = pixelMenuSize + 'px'
                pixelsMenu.push(pixelMenu)
            }
        }

        createMenuPixels(menuContainer)

        pixelsMenu.forEach((pixelMenu, key) => {
            let random1 = getRandomInt(15)
            let random2 = getRandomInt(11)
            let random3 = getRandomInt(3)
            let random4 = getRandomInt(5)
            let random5 = getRandomInt(7)
            pixelMenu.addEventListener('mouseover', () => {
                if ((key - (numMenuPixels / numMenuRows) + random1) > 0 && (key - (numMenuPixels / numMenuRows) + random1) < pixelsMenu.length - 1) {
                    pixelsMenu[key - (numMenuPixels / numMenuRows) + random1].classList.add('bg-e-blue')
                }
                if ((key - (numMenuPixels / numMenuRows) + random2) > 0 && (key - (numMenuPixels / numMenuRows) + random2) < pixelsMenu.length - 1) {
                    pixelsMenu[key - (numMenuPixels / numMenuRows) + random2].classList.add('opacity-30')
                }
                if ((key - 1 - random3) > 0 && (key - 1 - random3) < pixelsMenu.length - 1) {
                    pixelsMenu[key - 1 - random3].classList.add('bg-e-blue')
                }
                if ((key - 1 - random4) > 0 && (key - 1 - random4) < pixelsMenu.length - 1) {
                    pixelsMenu[key - 1 - random4].classList.add('opacity-30')
                }
                pixelMenu.classList.add('bg-e-blue')
                if ((key + 1 + random4) > 0 && (key + 1 + random4) < pixelsMenu.length - 1) {
                    pixelsMenu[key + 1 + random4].classList.add('bg-e-blue')
                }
                if ((key + 1 + random5) > 0 && (key + 1 + random5) < pixelsMenu.length - 1) {
                    pixelsMenu[key + 1 + random5].classList.add('opacity-30')
                }
                if ((key + (numMenuPixels / numMenuRows) - random1) > 0 && (key + (numMenuPixels / numMenuRows) - random1) < pixelsMenu.length - 1) {
                    pixelsMenu[key + (numMenuPixels / numMenuRows) - random1].classList.add('bg-e-blue')
                }
                if ((key + (numMenuPixels / numMenuRows) - random2) > 0 && (key + (numMenuPixels / numMenuRows) - random2) < pixelsMenu.length - 1) {
                    pixelsMenu[key + (numMenuPixels / numMenuRows) - random2].classList.add('opacity-30')
                }
            })
            pixelMenu.addEventListener('mouseover', () => {
                setTimeout(() => {
                    if ((key - (numMenuPixels / numMenuRows) + random1) > 0 && (key - (numMenuPixels / numMenuRows) + random1) < pixelsMenu.length - 1) {
                        pixelsMenu[key - (numMenuPixels / numMenuRows) + random1].classList.remove('bg-e-blue')
                    }
                    if ((key - (numMenuPixels / numMenuRows) + random2) > 0 && (key - (numMenuPixels / numMenuRows) + random2) < pixelsMenu.length - 1) {
                        pixelsMenu[key - (numMenuPixels / numMenuRows) + random2].classList.remove('opacity-30')
                    }
                    if ((key - 1 - random3) > 0 && (key - 1 - random3) < pixelsMenu.length - 1) {
                        pixelsMenu[key - 1 - random3].classList.remove('bg-e-blue')
                    }
                    if ((key - 1 - random4) > 0 && (key - 1 - random4) < pixelsMenu.length - 1) {
                        pixelsMenu[key - 1 - random4].classList.remove('opacity-30')
                    }
                    pixelMenu.classList.remove('bg-e-blue')
                    if ((key + 1 + random4) > 0 && (key + 1 + random4) < pixelsMenu.length - 1) {
                        pixelsMenu[key + 1 + random4].classList.remove('bg-e-blue')
                    }
                    if ((key + 1 + random5) > 0 && (key + 1 + random5) < pixelsMenu.length - 1) {
                        pixelsMenu[key + 1 + random5].classList.remove('opacity-30')
                    }
                    if ((key + (numMenuPixels / numMenuRows) - random1) > 0 && (key + (numMenuPixels / numMenuRows) - random1) < pixelsMenu.length - 1) {
                        pixelsMenu[key + (numMenuPixels / numMenuRows) - random1].classList.remove('bg-e-blue')
                    }
                    if ((key + (numMenuPixels / numMenuRows) - random2) > 0 && (key + (numMenuPixels / numMenuRows) - random2) < pixelsMenu.length - 1) {
                        pixelsMenu[key + (numMenuPixels / numMenuRows) - random2].classList.remove('opacity-30')
                    }
                }, 300)
            })
        })
    } else {
        pixelsMenu.forEach(pixelMenu => {
            setTimeout(() => {
                pixelMenu.remove()
            }, 500)
        })
    }
})

const surImp = document.getElementById('surimpression')

surImp.addEventListener('click', () => {
    toggle = false
    pixelsMenu.forEach(pixelMenu => {
        setTimeout(() => {
            pixelMenu.remove()
        }, 1000)
    })
})