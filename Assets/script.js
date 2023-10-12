var mainNav = document.getElementById("main-nav")
var closeButton = document.getElementById("close-button")
var SHOW = "show"
document.getElementById("open-button").addEventListener("click",function (){
    // mainNav.style.display = "block"
    mainNav.classList.add(SHOW)
})

closeButton.addEventListener("click",function (){
//    mainNav.style.display = "none"
   mainNav.classList.remove(SHOW)
})

Array.from(mainNav.querySelectorAll("a")).forEach(a => {
    a.addEventListener("click",()=>{
        closeButton.click()
    })
})