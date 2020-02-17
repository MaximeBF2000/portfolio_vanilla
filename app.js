console.log("app.js is loaded")
const d = document
const w = window
const b = d.body


// -----------------------------  Variables declaration - General scope  -----------------------------

// FadeUp
const fade_els = d.querySelectorAll(".fade")
let autoWritingCount = 0

// DynamicNav
const nav = d.querySelector("nav")
let nav_isShowed = false
<<<<<<< HEAD

// Darkmode
let is_inDarkmode = false
=======
>>>>>>> 00b56b355216dfe8ff9d3a2b9f4fb874269e1c4b


// -----------------------------  Functions Creation  -----------------------------


// FadeUp
const fadeEffect = () => {
  fade_els.forEach(e => {
    if((e.getBoundingClientRect().top - (w.innerHeight - (15/100)*w.innerHeight) <= 0)){
      e.classList.add("faded")
    } else if(e.classList.contains("faded")){
      e.classList.remove("faded")
    }
  })
}

// DynamicNav
const showNav = target => {
  if(!nav_isShowed){
    nav.style.transform = "translate(0, -50%)"
    target.innerHTML = "<i class='fas fa-caret-left'></i>"
    nav_isShowed = true
  } else {
    nav.style.transform = "translate(-100%, -50%)"
    target.innerHTML = "<i class='fas fa-caret-right'></i>"
    nav_isShowed = false
  }
  
}

<<<<<<< HEAD
// DarkMode
const toggleDarkmode = () => {
  b.classList.toggle("darkmode")
}

=======
>>>>>>> 00b56b355216dfe8ff9d3a2b9f4fb874269e1c4b

// -----------------------------  Functions Calls - Event Listeners  -----------------------------
window.addEventListener("scroll", fadeEffect)