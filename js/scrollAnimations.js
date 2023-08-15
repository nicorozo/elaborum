const revealItems = document.querySelectorAll('.reveal-item')

function checkScroll() {
    revealItems.forEach(element => {
        const bounding = element.getBoundingClientRect()
        if (bounding.top < window.innerHeight * 0.8) {
            element.style.opacity = 1
            element.style.transform = 'translateX(0)'

        }
    })
}
window.addEventListener('scroll', checkScroll)
window.addEventListener('load', checkScroll)