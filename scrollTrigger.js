gsap.registerPlugin(ScrollTrigger);

var t1=gsap.timeline({
    scrollTrigger:{
        trigger:'#box3',
        start:'center center', // top center bottom 20px 20%
        end:'center 20%',
        markers:true,
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

