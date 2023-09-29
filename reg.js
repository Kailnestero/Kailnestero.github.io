let contentt = document.getElementById("modals-reg")
let showw = document.getElementById("registration")
let closee = document.getElementById("closee")


showw.addEventListener("click", () => {
  if (contentt.style.display === "block") {
    contentt.style.display = "none"
  } else {
    contentt.style.display = "flex"

  }
})

 
closee.addEventListener("click", () =>{
    if (contentt.style.display === "none") {
        contentt.style.display = "flex"
      } else {
        contentt.style.display = "none"
      }
})

