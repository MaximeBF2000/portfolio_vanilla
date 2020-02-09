console.log("app.js is loaded")
const d = document


// Variables declaration - General scope
const fade_els = d.querySelectorAll(".fade")
let autoWritingCount = 0


//Functions Creation

// Fade effect
const fadeEffect = () => {
  fade_els.forEach(e => {
    if((e.getBoundingClientRect().top - (window.innerHeight - (15/100)*window.innerHeight) <= 0)){
      e.classList.add("faded")
    } else if(e.classList.contains("faded")){
      e.classList.remove("faded")
    }
  })
}

// Text auto writing
const autoWriting = (text, div, speed) => {
  setInterval(() => {
    if(autoWritingCount < text.length){
      div.innerHTML += text[autoWritingCount]
      autoWritingCount++
    }
  }, speed)
}


// Functions Calls - Event Listeners
window.addEventListener("scroll", fadeEffect)
// autoWriting("Entreprenor - Web developper", d.querySelector(".job"), 100)