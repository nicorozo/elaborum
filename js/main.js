const numbers = [32000, 31990, 32200, 32150, 31800, 32300, 32100, 32050, 31900, 32250, 31950, 32180, 32070];

const menuBtn = document.querySelector('.hero__header-menu-icon')
const menuDiv = document.querySelector('.hero__menu')

menuBtn.addEventListener('click', (e) => {
    console.log(e)
    menuDiv.classList.toggle('hero__menu_active')
    menuBtn.classList.toggle("hero__header-menu-icon_active")
})

