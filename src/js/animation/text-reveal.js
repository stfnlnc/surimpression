import gsap from "gsap";

document.addEventListener('DOMContentLoaded', () => {

    // PRELOADER
    // TITLE REVEAL
    const lines = document.querySelectorAll('.line')
    let i = 0
    lines.forEach((line) => {
        gsap.fromTo(line, {
            y: (line.getBoundingClientRect().height * 1.6),
        }, {
            y: 0,
            duration: 3,
            ease: "power4.inOut"
        })
        i++
    })

})