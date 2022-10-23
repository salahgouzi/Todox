function modeSwitch() {
    let bgc = document.body.style.backgroundColor
    let clr = document.body.style.color
    if (bgc === "black" && clr === "white") {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
    else if (bgc === "white" && clr === "black"){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }
    else {
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
  }
export default modeSwitch