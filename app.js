console.log("app.js is loaded")
const d = document


function textWriteInHTML(text, div, speed){

  let newText = ""
  let count = 0
  setInterval(() => {
    if(count < text.length){
      count++
      newText = text.splice(0, count)
      div.innerText = newText
    } else {
      count--
      newText = text.splice(0, count)
      div.innerText = newText
    }
  }, speed)

}
// textWriteInHTML("Entreprenor - Web developper", d.querySelector(".job"), 1000)