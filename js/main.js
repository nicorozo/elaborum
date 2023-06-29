const menuBtn = document.querySelector('.hero__header-menu-icon')
const menuDiv = document.querySelector('.hero__menu')

menuBtn.addEventListener('click', (e) => {
    console.log(e)
    menuDiv.classList.toggle('hero__menu_active')
    menuBtn.classList.toggle("hero__header-menu-icon_active")
})

const sliderImg = document.querySelector('.features__slider')

let translateVal = 0

document.querySelectorAll('.features__controls li').forEach(function sliderDots(indicator, index) {
    indicator.addEventListener('click', () => {
        translateVal = index

        document.querySelector('.features__controls .features__selected').classList.remove('features__selected')
        indicator.classList.add('features__selected')

        sliderImg.style.transform = 'translate(' + translateVal * -20 + '%)'
    })
})

/* setInterval(function sliderTimer(){
    translateVal <= 4 ? translateVal * -20 : translateVal = 0
    sliderImg.style.transform = 'translate(' + translateVal * -20 + '%)'

    console.log(translateVal)
}, 1000)
 */

const calloutsContent = ["Coffee Shop", "Onsite Restaurant", "Conference Center", "Pre-function Space", "Fitness Center"]
const callouts2 = ["Outdoor Lounge & Workspace", "Indoor/Outdoor Event Space", "Bike Storage", "Attached Covered Parking", "24/7 Security"];
const callouts3 = ["Onsite Property Management", "Onsite Concierge Services", "Chemical Storage", "Lab Receiving & Waste Staging", "Back-up Generator Capacity"]
calloutsColumn(calloutsContent)
calloutsColumn(callouts2)
calloutsColumn(callouts3)

function calloutsColumn(array) {
    array.forEach((elem) => {
        const elementDiv = document.createElement("div")
        elementDiv.classList.add('features__callouts-row')
        document.querySelector('.features__callouts-collumn').appendChild(elementDiv)
        elementDiv.innerHTML = "<span>/</span>" + `<p>${elem}</p>`
    })
}