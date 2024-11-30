
var tl = gsap.timeline();

tl.from("#logo",{
    y:-20,
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
})
tl.from(".nav_link",{
    y:-20,
    opacity:0,
    duration: 0.5,
    stagger: 0.1,
})
gsap.from("#btn",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay: 0.5,
})
gsap.from("#menu-btn",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay: 0.6,
})
gsap.from(".left-box",{
    y:20,
    duration: 0.5,
    opacity: 0,
    scale: 0,
    delay: 1,
})
gsap.from(".right-box",{
    y:20,
    duration: 0.5,
    opacity: 0,
    scale: 0,
    delay: 1,
})
gsap.from("#about-animation h1", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#about-animation h1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#p1", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#p1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#p2", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#p2",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#h3", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#h3",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from(".li-ani", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".li-ani",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#p3", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#p3",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#mySkills", {
    x:20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#mySkills",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#sk-box1", {
    y:-20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#sk-box1",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box2", {
    y:-20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#sk-box2",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box3", {
    y:-20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#sk-box3",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box4", {
    y:-20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#sk-box4",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box5", {
    y:-20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#sk-box5",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box6", {
    y:-20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#sk-box6",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from(".portfolio-box h1", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".portfolio-box h1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#p-img-1", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#p-img-1",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-2", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#p-img-2",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-3", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#p-img-3",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-4", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#p-img-4",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-5", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#p-img-5",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-6", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#p-img-6",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#portfolio-btn", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#portfolio-btn",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from(".experience-box h1",{
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".experience-box h1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc1", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#xc1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc2", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#xc2",
        scroller:"body",
        marker:true,
        start:"top 0%",
    }
})
gsap.from("#xc3", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#xc3",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc4", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#xc4",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc5", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#xc5",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc6", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#xc6",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#test-1", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#test-1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#test-2", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#test-2",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#test-3", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#test-3",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#test-4", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#test-4",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from(".testimonial-img", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".testimonial-img",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#fc-box-1", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#fc-box-1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#fc-box-2", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#fc-box-2",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})
gsap.from("#fc-box-3", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#fc-box-3",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})
gsap.from(".f-box-1",{
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".f-box-1",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})
gsap.from(".f-box-2",{
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".f-box-2",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})
gsap.from(".bot-box",{
    x: 20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".bot-box",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})