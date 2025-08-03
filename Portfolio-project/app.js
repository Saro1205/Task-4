// GSAP plugins are already loaded via CDN in the HTML file
const gsap = window.gsap // Declare gsap variable
const ScrollTrigger = window.ScrollTrigger // Declare ScrollTrigger variable

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme") || "dark"
body.setAttribute("data-theme", currentTheme)

themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark" 

    body.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)

    gsap.to(themeToggle,{
        scale: 0.9,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
    })
} )


// Mobile Menu Managment
const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    mobileMenu.classList.toggle("active")

    //Prevent body scroll when is open
    if (mobileMenu.classList.countains("active")) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = ""
    }
})


// Loading Animation
function initLoader() {
    const loader = document.querySelector(".loader")
    const loaderText = document.querySelector(".loader-text")
    const LoaderProgress = document.querySelector(".loader-progress")

    // animation loader text 
    gsap.to(loaderText,  {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
    })

    // animation progress bar 
    gsap.to(LoaderProgress, {
        width: "100%",
        duration: 2,
        ease: "power2.inout",
        onComplete: () => {
            gsap.to(loader,{
                opacity: 0,
                duration:0.7,
                onComplete: () => {
                    loader.style.display = "none"
                    initAnimations()
                }
            })
        }
    })
}

// initilize loader on page load
window.addEventListener("load", initLoader)


// Custon cursor ( only on desktop )
if (window.innerWidth > 768) {
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1,
        })

        gsap.to(cursorFollower, {
            x: e.clientX - 20,
            y: e.clientY -20,
            duration: 0.2,
        })
    })
}


// initialize all animations 
function initAnimations() {
    // Navigation animation
    gsap.to("nav", {
        y: 0,
        duration: 1,
        ease: "power3.out",
    })

    // Hero Animation 
    const heroT1 = gsap.timeline()
    heroT1
         .to(".hero-title", {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 1.2,
            ease: "power3.out",
         })
         .to(".hero-subtitle", {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.8,
            ease: "power3.out",
         }, "-=0.5")
         .to(".hero-description", {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.8,
            ease: "power3.out",
         }, "-=0.3")
         .to(".cta-button", {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.8,
            ease: "power3.out",
         }, "-=0.3")
}

 // Minimal JS just for the spotlight effect
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        // Update CSS variables for the spotlight effect
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
      });
    });

  // Project  

    const video1 = document.getElementById('projectVideo1');
    const video2 = document.getElementById('projectVideo2');
    const video3 = document.getElementById('projectVideo3');
    const video4 = document.getElementById('projectVideo4');

    const videoList =[video1, video2, video3, video4];

    videoList.forEach (function(video){
        video.addEventListener("mouseover", function(){
            video.play()
        })
        video.addEventListener("mouseout", function(){
        video.pause();
    })
    })


 // form handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      document.getElementById('successMessage').style.display = 'block';
      
      // Reset form
      this.reset();
      
      // Hide success message after 3 seconds
      setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
      }, 3000);

    });


    // Send mail
    document.addEventListener("DOMContentLoaded", function () {
      emailjs.init("9c9UABgvXx_XjFIfd"); 
    
      document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        emailjs.sendForm("service_5buonrg", "template_5gqsi34", this);
      });
    });