function parallax (element, distance, speed){
    const item = document.querySelector(element);

    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function(){
    parallax("header", window.scrollY, 1);
    parallax(".drone", window.scrollY, 0.3);
    parallax(".drone2", window.scrollY, 0.5);
    parallax(".intro-text1", window.scrollY, 0.4);
    parallax(".intro-text2", window.scrollY, 0.2);
})



gsap.form('.logo1', {opacity:0, duration:3, delay:.5, y:30, ease:'expo.out'})

