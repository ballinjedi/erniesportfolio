const mainNav = document.getElementById("main-nav");
const closeButton = document.getElementById("close-button");
const SHOW = "show";
const navAnchors = mainNav.querySelectorAll("a");

document.getElementById("open-button").addEventListener("click", () => {
    // mainNav.style.display = "block"
    mainNav.classList.add(SHOW)
})

closeButton.addEventListener("click", () => {
    //    mainNav.style.display = "none"
    mainNav.classList.remove(SHOW)
})

Array.from(navAnchors).forEach(a => {
    a.addEventListener("click", event => {
        event.preventDefault()
        closeButton.click()
        const href = a.getAttribute("href");
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
            }
        }
    })

})

