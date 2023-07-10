gsap.set('#set',{
    x:"200%" })


gsap.to('#to',{
    duration:2,translateX:300,backgroundColor:'blue',ease:'bounce',delay:2
})
gsap.from('#from',{
    duration:2,scale:0.2,backgroundColor:'blue',ease:'bounce'
})
gsap.fromTo('#fromto',{x:100,duration:2 },{x:400})

 //gsap.from('.sta .circle',{duration:1.5,x:200,ease:'easeIn'})
 gsap.from('.sta .circle',{duration:1.5,x:200,ease:'easeIn',stagger:0.5})
//gsap.from('.circle',{duration:1.5,y: () => Math.random() *100,ease:'easeIn',stagger:.9})
//var t1=gsap.timeline();
//var t1=gsap.timeline({repeat:2}); //repeate timeline
var t1=gsap.timeline({repeat:2,yoyo:true}); //repeate timeline with alernate reverse animation
t1.from('#fromt1',{
    duration:2,scale:0.2,backgroundColor:'blue',ease:'bounce'
})
t1.from('#fromt1',{    duration:2,rotation:360},"+=1") //add delay before or after using += ,-=
t1.from('.circle.tl',{duration:1.5,x:200,ease:'easeIn',stagger:.1},"-=2")