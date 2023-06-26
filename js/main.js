const menuBtn = document.querySelector('.hero__header-menu-icon')
const menuDiv = document.querySelector('.hero__menu')

menuBtn.addEventListener('click', (e) => {
    console.log(e)
    menuDiv.classList.toggle('hero__menu_active')
    menuBtn.classList.toggle("hero__header-menu-icon_active")
})