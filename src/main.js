import './style.css'
import './js/animation/pixel.js'
import './js/animation/pixel-grid.js'
import './js/animation/pixel-menu.js'
import './js/animation/text-reveal.js'
import './js/nav/menu.js'
import './js/nav/menu-mobile.js'

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
    smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

const pixelContainer = document.getElementById('pixel-container')

gsap.to(pixelContainer, {
    scrollTrigger: {
        trigger: pixelContainer,
        start: "top top",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    }
})