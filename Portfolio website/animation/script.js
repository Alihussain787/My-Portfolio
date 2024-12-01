const screen = gsap.matchMedia();
var tl = gsap.timeline();

screen.add("(min-width: 981px)", () => {
    tl.from("#logo",{
        y:-20,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
    })
    tl.from(".nav_link",{
        y:-20,
        opacity:0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
    })
    gsap.from("#btn",{
        y:-20,
        opacity:0,
        duration:0.5,
        delay: 1,
        ease: "power3.out",
    })
    gsap.from("#menu-btn",{
        y:-20,
        opacity:0,
        duration:0.5,
        delay: 1.1,
        ease: "power3.out",
    })
    gsap.from(".left-box",{
        y:20,
        duration: 0.5,
        opacity: 0,
        scale: 0,
        delay: 1,
        ease: "power3.out",
    })
    gsap.from(".right-box",{
        y:20,
        duration: 0.5,
        opacity: 0,
        scale: 0,
        delay: 1,
        ease: "power3.out",
    })
    gsap.from("#about-animation h1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#about-animation h1",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#p1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#p1",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#p2", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#p2",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#h3", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#h3",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from(".li-ani", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger:{
            trigger:".li-ani",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#p3", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#p3",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#mySkills", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#mySkills",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#sk-box1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#sk-box1",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#sk-box2", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#sk-box2",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#sk-box3", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#sk-box3",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#sk-box4", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#sk-box4",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#sk-box5", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#sk-box5",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#sk-box6", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#sk-box6",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from(".portfolio-box h1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:".portfolio-box h1",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#p-img-1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#p-img-1",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#p-img-2", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#p-img-2",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#p-img-3", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#p-img-3",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#p-img-4", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#p-img-4",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#p-img-5", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#p-img-5",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#p-img-6", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#p-img-6",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from("#portfolio-btn", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#portfolio-btn",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from(".experience-box h1",{
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:".experience-box h1",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#xc1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#xc1",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#xc2", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#xc2",
            scroller:"body",
            marker:true,
            start:"top 0%",
        }
    })
    gsap.from("#xc3", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#xc3",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#xc4", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#xc4",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#xc5", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#xc5",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#xc6", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#xc6",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#test-1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#test-1",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#test-2", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#test-2",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#test-3", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#test-3",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#test-4", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#test-4",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from(".testimonial-img", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger:{
            trigger:".testimonial-img",
            scroller:"body",
            marker:true,
            start:"top 70%",
        }
    })
    gsap.from(".f-heading",{
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:".f-heading",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#fc-box-1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#fc-box-1",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#fc-box-2", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#fc-box-2",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#fc-box-3", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#fc-box-3",
            scroller:"body",
            marker:true,
            start:"top 80%",
        }
    })
    gsap.from(".f-socials",{
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger:{
            trigger:".f-socials",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
    gsap.from("#bot-text",{
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:"#bot-text",
            scroller:"body",
            marker:true,
            start:"top 90%",
        }
    })
})


screen.add("(max-width: 980px)",() => {

tl.from("#logo",{
    y:-20,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    ease: "power3.out",
})
tl.from(".nav_link",{
    y:-20,
    opacity:0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power3.out",
})
gsap.from("#btn",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay: 1,
    ease: "power3.out",
})
gsap.from("#menu-btn",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay: 1.1,
    ease: "power3.out",
})
gsap.from(".left-box",{
    y:20,
    duration: 0.5,
    opacity: 0,
    scale: 0,
    delay: 1,
    ease: "power3.out",
})
gsap.from(".right-box",{
    y:20,
    duration: 0.5,
    opacity: 0,
    scale: 0,
    delay: 1,
    ease: "power3.out",
})
gsap.from("#about-animation h1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#about-animation h1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#p1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#p1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#p2", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#p2",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#h3", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#h3",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from(".li-ani", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:".li-ani",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#p3", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#p3",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#mySkills", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#mySkills",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#sk-box1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#sk-box1",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box2", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#sk-box2",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box3", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#sk-box3",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box4", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#sk-box4",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box5", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#sk-box5",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#sk-box6", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#sk-box6",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from(".portfolio-box h1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:".portfolio-box h1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#p-img-1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#p-img-1",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-2", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#p-img-2",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-3", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#p-img-3",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-4", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#p-img-4",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-5", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#p-img-5",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#p-img-6", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#p-img-6",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#portfolio-btn", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#portfolio-btn",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from(".experience-box h1",{
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:".experience-box h1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#xc1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc2", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#xc2",
        scroller:"body",
        marker:true,
        start:"top 0%",
    }
})
gsap.from("#xc3", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#xc3",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc4", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#xc4",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc5", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#xc5",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#xc6", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#xc6",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#test-1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#test-1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#test-2", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#test-2",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#test-3", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#test-3",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#test-4", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#test-4",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from(".testimonial-img", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:".testimonial-img",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#fc-box-1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#fc-box-1",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from("#fc-box-2", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#fc-box-2",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})
gsap.from("#fc-box-3", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#fc-box-3",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})
gsap.from(".f-box-1",{
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:".f-box-1",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})
gsap.from(".f-box-2",{
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:".f-box-2",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})
gsap.from("#bot-text",{
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger:{
        trigger:"#bot-text",
        scroller:"body",
        marker:true,
        start:"top 100%",
    }
})
})
