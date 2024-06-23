gsap.from("#page1 #circle", {
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from("#page2 #circle", {
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start :"top 60%",
        end: "top 30%",
        scrub: 2
    }
})