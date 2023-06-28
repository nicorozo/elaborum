const menuBtn = document.querySelector('.hero__header-menu-icon')
const menuDiv = document.querySelector('.hero__menu')

menuBtn.addEventListener('click', (e) => {
    console.log(e)
    menuDiv.classList.toggle('hero__menu_active')
    menuBtn.classList.toggle("hero__header-menu-icon_active")
})

const sliderImg = document.querySelector('.features__slider')

let translateVal = 0

const liArray = document.querySelectorAll('.features__controls li')
liArray.forEach(function sliderDots(indicator, index) {
    indicator.addEventListener('click', () => {
        translateVal = index
        document.querySelector('.features__controls-li.features__selected')?.classList.add('features__selected');

        indicator.classList.add('features__selected')
        sliderImg.style.transform = 'translate(' + translateVal * -20 + '%)'
    })
})

/* setInterval(function sliderTimer() {
    translateVal <= 4 ? translateVal * -20 : translateVal = 0
    sliderImg.style.transform = 'translate(' + translateVal * -20 + '%)'

    console.log(translateVal)
}, 1000)
 */
