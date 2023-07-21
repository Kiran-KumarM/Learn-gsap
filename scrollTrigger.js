gsap.registerPlugin(ScrollTrigger);

var t1=gsap.timeline({
    scrollTrigger:{
        trigger:'#box3',
        start:'center center', // top center bottom 20px 20%
        end:'center 20%',
        //markers:true,
       // scrub:true,//animation lock with scroll bar
       scrub:true,
       //pin:true, // element maintains it position on scroll
       pin:'.box3', // element maintains it position on scroll
       snap:1, // automatically snap to comple the wholw anmation
       toggleClass:'active',
       toggleActions:'restart pause resume pause'

    }
})

t1.to('#box1',{
    duration:2,
    rotation:180,
    x:500
})

t1.to('.box3',{
  
    duration:2,
    rotation:360,
    x:500
})

//------------------ EXAMPLE 1 -------------------------

/* Panels */
panelsContainer = document.querySelector(".panel_wrappr");
const panels = gsap.utils.toArray(".panel_wrappr .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: ".panel_wrappr",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});

