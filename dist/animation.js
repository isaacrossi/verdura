const fadedTags = document.querySelectorAll("h2, h4, .hero__text, .hero__image, div.menu__grid, .fade h3, .fade p, .fade img, .fade span")

fadedTags.forEach(tag => {
    tag.style.opacity = 0;
})

const fadeIn = function () {
    // look through all animated tags and see with the getBoundingClientRect
    // if its in the window

    fadedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom
        
        if (tagTop < window.innerHeight && tagBottom > 0) {
            tag.style.animation = `fadeIn 1s 0.25s both`;
        } else {
            tag.style.opacity = 0
            tag.style.animation = ""
        }
    })

}


// on load run fade in
fadeIn()

// on scroll run fade in
document.addEventListener("scroll", function () {
    fadeIn()
})

// on browser resize run fade in
window.addEventListener("resize", function () {
    fadeIn()
})
