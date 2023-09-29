let content = document.getElementById("modals")
let show = document.getElementById("trigger")
let close = document.getElementById("close")

show.addEventListener("click", () => {
  if (content.style.display === "block") {
    content.style.display = "none"
  } else {
    content.style.display = "flex"
  }
})

close.addEventListener("click", () =>{
    if (content.style.display === "none") {
        content.style.display = "flex"
      } else {
        content.style.display = "none"
      }
}

)