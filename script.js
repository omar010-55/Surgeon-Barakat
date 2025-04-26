const ul = document.querySelector(".hero header ul")
const menu =document.querySelector("#menu")
let isOn = false

function state() {
  let checkState = () => isOn
  let changeState = () => isOn ? isOn = false : isOn = true;
  return {checkState, changeState}
}

function showMenu() {
  if(state().checkState() === false) {
    menu.textContent = "close"
  } else {
    menu.textContent = "menu"
  }
  ul.classList.toggle("on")
  state().changeState()
}
menu.addEventListener("click", showMenu)