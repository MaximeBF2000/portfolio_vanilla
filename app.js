console.log("app.js is loaded")
const d = document
const w = window


// -----------------------------  Variables declaration - General scope  -----------------------------

// FadeUp
const fade_els = d.querySelectorAll(".fade")
let autoWritingCount = 0

// DynamicNav
const mainContent = d.querySelector("main")
const nav = d.querySelector("nav")
const hamburgerBtn = d.querySelector(".hamburger_btn")
const header = d.querySelector("header")
const navWidth = 20
let nav_isShowed = false
let headerObserver_switch = true


// -----------------------------  Functions Creation  -----------------------------


// FadeUp
const fadeEffect = () => {
  fade_els.forEach(e => {
    if((e.getBoundingClientRect().top - (window.innerHeight - (15/100)*window.innerHeight) <= 0)){
      e.classList.add("faded")
    } else if(e.classList.contains("faded")){
      e.classList.remove("faded")
    }
  })
}

// DynamicNav
const menuShow = () => {
  if(!nav_isShowed){
    nav.style.width = navWidth + "%"
    mainContent.style.width = (100 - navWidth) + "%"
    mainContent.style.marginLeft = navWidth + "%"
    nav_isShowed = true
  } else {
    mainContent.style.width = 100 + "%"
    mainContent.style.marginLeft = 0 + "%"
    nav.style.width = 0 + "%"
    nav_isShowed = false
  }
}

const headerObeserverOptions = {
  rootMargin: '0px'
}
const headerObeserver = new IntersectionObserver(() => {
  if(headerObserver_switch && w.scrollY < w.innerHeight){
    hamburgerBtn.style.color = "#D3D3D3"
    headerObserver_switch = false
  } else {
    hamburgerBtn.style.color = "#FF5733"
    headerObserver_switch = true
  }
}, headerObeserverOptions)
headerObeserver.observe(header)


// -----------------------------  Functions Calls - Event Listeners  -----------------------------
window.addEventListener("scroll", fadeEffect)