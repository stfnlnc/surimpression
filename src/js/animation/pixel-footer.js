import {getRandomInt} from "../inc/random-int.js";
import gsap from "gsap";

const pixelFooterContainer = document.getElementById('pixel-footer')

const pixelFooterWidth = pixelFooterContainer.getBoundingClientRect().width
const pixelFooterHeight = pixelFooterContainer.getBoundingClientRect().height
let pixelFooterSize = pixelFooterContainer.getBoundingClientRect().width / 30
const numFooterCols = Math.ceil(pixelFooterWidth / pixelFooterSize)
const numFooterRows = Math.ceil(pixelFooterHeight / pixelFooterSize)
const numFooterPixels = numFooterCols * numFooterRows
let pixelsFooter = []

function createFooterPixels(pixelFooterContainer, key) {
    for (let i = 0; i < numFooterPixels; i++) {
        const pixelFooter = document.createElement("div")
        pixelFooter.classList.add('pixel-footer')
        pixelFooter.classList.add('transition-opacity')
        pixelFooter.classList.add('duration-1000')
        pixelFooterContainer.appendChild(pixelFooter)
        pixelFooter.style.width = pixelFooterSize + 'px'
        pixelFooter.style.height = pixelFooterSize + 'px'
        pixelsFooter.push(pixelFooter)
    }
}

createFooterPixels(pixelFooterContainer)

setInterval(() => {
    pixelsFooter.forEach(pixelFooter => {
        gsap.to(pixelFooter, {
            opacity: 0.1 * getRandomInt(5)
        })
    })
}, 1000)
