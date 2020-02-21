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

// Darkmode
let is_inDarkmode = false

// Send Email
const form = d.querySelector(".contact-form")
const input_mail = d.querySelector(".contact-form .mail")
const input_object = d.querySelector(".contact-form .object")
const input_message = d.querySelector(".contact-form .main-text")


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

// DarkMode
const toggleDarkmode = () => {
  b.classList.toggle("darkmode")
}

// Send Email

const sendEmail = event => {
  event.preventDefault()
  console.log(`
    mail: ${input_mail.value},
    subject: ${input_object.value},
    msg: ${input_message.value}
  `)
  Email.send({
    SecureToken : "60a84dae-0a62-4f1f-aed6-6631c4c7da68",
    To : 'maxime.bounaas@gmail.com',
    From : input_mail.value,
    Subject : input_object.value,
    Body : input_message.value
  }).then(console.log("email sent !")).catch(err => console.log("Error: ", err))
}


// -----------------------------  Functions Calls - Event Listeners  -----------------------------
window.addEventListener("scroll", fadeEffect)
form.addEventListener("submit", sendEmail)
