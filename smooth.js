//scroll Smooth is paid


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
let smoother =ScrollSmoother.create({
    wrapper:'#smooth-wrapper',
    content:'#smooth',
    smooth:4
})