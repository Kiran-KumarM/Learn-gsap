//------------------ EXAMPLE 2 -------------------------

let bubbles = gsap.timeline({
  scrollTrigger: {
    trigger: "#explorex .row1",
    start: "top 50%", // top center bottom 20px 20%
    //end:'center 20%',
    markers: true,
    //scrub:true,//animation lock with scroll bar
    scrub: 0.2,
    //pin:true, // element maintains it position on scroll
    pin: "#explorex", // element maintains it position on scroll
    //    snap:1, // automatically snap to comple the wholw anmation
    //    toggleClass:'active',
    //    toggleActions:'restart pause resume pause'
  },
});

bubbles.to(".row1", {
  duration: 2,
  translateX: "50%",
});
bubbles.to(
  ".row2",
  {
    duration: 2,
    translateX: "-50%",
  },
  0
);

bubbles.to("#expand .blue", {
  duration: 2,
  scale: 13,
});
