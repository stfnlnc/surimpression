import {getRandomInt} from "../inc/random-int.js";


const pixelGridContainers = document.querySelectorAll(".pixel-grid-container")
const pixelGridWidth = pixelGridContainers[0].getBoundingClientRect().width
const pixelGridHeight = pixelGridContainers[0].getBoundingClientRect().height
let pixelGridSize = pixelGridContainers[0].getBoundingClientRect().width / 20
const numGridCols = Math.ceil(pixelGridWidth / pixelGridSize)
const numGridRows = Math.ceil(pixelGridHeight / pixelGridSize)
const numGridPixels = numGridCols * numGridRows
let pixelsGrid = []

function createGridPixels(pixelGridContainer, key) {
    for (let i = 0; i < numGridPixels; i++) {
        const pixelGrid = document.createElement("div")
        pixelGrid.classList.add('pixel-grid')
        pixelGridContainer.appendChild(pixelGrid)
        pixelGrid.style.width = pixelGridSize + 'px'
        pixelGrid.style.height = pixelGridSize + 'px'
        pixelsGrid.push(pixelGrid)
    }
}

pixelGridContainers.forEach((pixelGridContainer) => {
    pixelGridContainer.addEventListener('mouseenter', () => {
        createGridPixels(pixelGridContainer)
        pixelsGrid.forEach((pixelGrid, key) => {
            let random1 = getRandomInt(15)
            let random2 = getRandomInt(11)
            let random3 = getRandomInt(3)
            let random4 = getRandomInt(5)
            let random5 = getRandomInt(7)
            pixelGrid.addEventListener('mouseover', () => {
                if ((key - (numGridPixels / numGridRows) + random1) > 0 && (key - (numGridPixels / numGridRows) + random1) < pixelsGrid.length - 1) {
                    pixelsGrid[key - (numGridPixels / numGridRows) + random1].classList.add('bg-e-blue')
                }
                if ((key - (numGridPixels / numGridRows) + random2) > 0 && (key - (numGridPixels / numGridRows) + random2) < pixelsGrid.length - 1) {
                    pixelsGrid[key - (numGridPixels / numGridRows) + random2].classList.add('opacity-30')
                }
                if ((key - 1 - random3) > 0 && (key - 1 - random3) < pixelsGrid.length - 1) {
                    pixelsGrid[key - 1 - random3].classList.add('bg-e-blue')
                }
                if ((key - 1 - random4) > 0 && (key - 1 - random4) < pixelsGrid.length - 1) {
                    pixelsGrid[key - 1 - random4].classList.add('opacity-30')
                }
                pixelGrid.classList.add('bg-e-blue')
                if ((key + 1 + random4) > 0 && (key + 1 + random4) < pixelsGrid.length - 1) {
                    pixelsGrid[key + 1 + random4].classList.add('bg-e-blue')
                }
                if ((key + 1 + random5) > 0 && (key + 1 + random5) < pixelsGrid.length - 1) {
                    pixelsGrid[key + 1 + random5].classList.add('opacity-30')
                }
                if ((key + (numGridPixels / numGridRows) - random1) > 0 && (key + (numGridPixels / numGridRows) - random1) < pixelsGrid.length - 1) {
                    pixelsGrid[key + (numGridPixels / numGridRows) - random1].classList.add('bg-e-blue')
                }
                if ((key + (numGridPixels / numGridRows) - random2) > 0 && (key + (numGridPixels / numGridRows) - random2) < pixelsGrid.length - 1) {
                    pixelsGrid[key + (numGridPixels / numGridRows) - random2].classList.add('opacity-30')
                }
            })
            pixelGrid.addEventListener('mouseover', () => {
                setTimeout(() => {
                    if ((key - (numGridPixels / numGridRows) + random1) > 0 && (key - (numGridPixels / numGridRows) + random1) < pixelsGrid.length - 1) {
                        pixelsGrid[key - (numGridPixels / numGridRows) + random1].classList.remove('bg-e-blue')
                    }
                    if ((key - (numGridPixels / numGridRows) + random2) > 0 && (key - (numGridPixels / numGridRows) + random2) < pixelsGrid.length - 1) {
                        pixelsGrid[key - (numGridPixels / numGridRows) + random2].classList.remove('opacity-30')
                    }
                    if ((key - 1 - random3) > 0 && (key - 1 - random3) < pixelsGrid.length - 1) {
                        pixelsGrid[key - 1 - random3].classList.remove('bg-e-blue')
                    }
                    if ((key - 1 - random4) > 0 && (key - 1 - random4) < pixelsGrid.length - 1) {
                        pixelsGrid[key - 1 - random4].classList.remove('opacity-30')
                    }
                    pixelGrid.classList.remove('bg-e-blue')
                    if ((key + 1 + random4) > 0 && (key + 1 + random4) < pixelsGrid.length - 1) {
                        pixelsGrid[key + 1 + random4].classList.remove('bg-e-blue')
                    }
                    if ((key + 1 + random5) > 0 && (key + 1 + random5) < pixelsGrid.length - 1) {
                        pixelsGrid[key + 1 + random5].classList.remove('opacity-30')
                    }
                    if ((key + (numGridPixels / numGridRows) - random1) > 0 && (key + (numGridPixels / numGridRows) - random1) < pixelsGrid.length - 1) {
                        pixelsGrid[key + (numGridPixels / numGridRows) - random1].classList.remove('bg-e-blue')
                    }
                    if ((key + (numGridPixels / numGridRows) - random2) > 0 && (key + (numGridPixels / numGridRows) - random2) < pixelsGrid.length - 1) {
                        pixelsGrid[key + (numGridPixels / numGridRows) - random2].classList.remove('opacity-30')
                    }
                }, 300)
            })
        })
    })
    pixelGridContainer.addEventListener('mouseleave', () => {
        pixelsGrid.forEach(pixelGrid => {
            pixelGrid.remove()
        })
    })
})

