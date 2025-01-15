import gsap from "gsap";

document.addEventListener('DOMContentLoaded', () => {

    // PRELOADER
    // CREATE AND REVEAL PIXEL

    const pixelContainer = document.getElementById("pixel-container")
    const pixelContainerWidth = document.getElementById("pixel-container").getBoundingClientRect().width
    const pixelContainerHeight = document.getElementById("pixel-container").getBoundingClientRect().height
    let pixelSize = pixelContainer.getBoundingClientRect().width / 10
    const numCols = Math.ceil(pixelContainerWidth / pixelSize)
    const numRows = Math.ceil(pixelContainerHeight / pixelSize)
    const numPixels = numCols * numRows
    let pixels = []

    function createPixels() {
        for (let i = 0; i < numPixels; i++) {
            const pixel = document.createElement("div")
            pixel.classList.add('pixel')
            pixelContainer.appendChild(pixel)
            pixel.style.width = pixelSize + 'px'
            pixel.style.height = pixelSize + 'px'
            pixels.push(pixel)
        }
    }

    function animatePixels() {
        gsap.fromTo(pixels, {
            opacity: 0
        }, {
            delay: 2,
            opacity: 1,
            duration: 0.001,
            stagger: {
                each: 0.02,
                from: 'random'
            }
        })
    }

    const pixelTitle = document.getElementById("preloader-title")
    const pixelText = document.getElementById("preloader-text")
    const body = document.querySelector("body")
    const main = document.querySelector("main")
    const navBar = document.querySelector("nav")

    createPixels()
    animatePixels()
    setTimeout(() => {
        gsap.fromTo(pixelText, {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.inOut"
        })
        pixelContainer.classList.remove("bg-e-blue")
        pixels.map(pixel => {
            pixel.style.display = "none"
            pixel.remove()
        })
        pixelTitle.classList.remove("absolute")
        navBar.classList.remove("translate-x-full")
        setTimeout(() => {
            body.classList.remove("overflow-hidden")
            main.classList.add("-translate-y-40")
        }, 2000)
    }, 4000)


})