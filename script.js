
var blu= document.querySelector("#cursor-blur")

var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top= dets.y+"px";
    blu.style.left=dets.x-200+"px";
    blu.style.top= dets.y-200+"px";

})



gsap.registerPlugin(ScrollTrigger);
gsap.to("#nav",{
    backgroundColor :"rebeccapurple",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -11%",
        scrub:0.15,
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end:"top -100%",
        scrub:2
    }
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px rebeccapurple";
    crsr.style.backgroundColor = "rebeccapurple";
  });
});
gsap.registerPlugin(ScrollTrigger);
gsap.from("#home img,#home-in", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease:"power2.out",
  scrollTrigger: {
    trigger: "#home",
    scroller: "body",
    start: "top 80%",   // more reliable trigger point
    end: "top 40%",
    scrub: 1,
    // markers: true, 
  },
});


gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
