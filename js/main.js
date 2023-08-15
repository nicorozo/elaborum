function menuFunc() {
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
}


/* setInterval(function sliderTimer(){
    translateVal <= 4 ? translateVal * -20 : translateVal = 0
    sliderImg.style.transform = 'translate(' + translateVal * -20 + '%)'

    console.log(translateVal)
}, 1000)
 */
function slider() {

    const arrayBenefits1 = ["Salud corazón", "Energía", "Menos estrés", "Flexibilidad", "Confianza",];
    const arrayBenefits2 = ["Vitalidad", "Salud crónica", "Creatividad fluída", "Colaboración efectiva", "Enfoque claro"];
    const arrayBenefits3 = ["Estrés reducido", "Bienestar emocional", "Claridad mental", "Resiliencia aumentada", "Paz interior"];
    calloutsColumn(arrayBenefits1)
    calloutsColumn(arrayBenefits2)
    calloutsColumn(arrayBenefits3)

    function calloutsColumn(array) {
        array.forEach((elem) => {
            const elementDiv = document.createElement("div")
            elementDiv.classList.add('features__callouts-row')
            document.querySelector('.features__callouts-collumn').appendChild(elementDiv)
            elementDiv.innerHTML = "<span>/</span>" + `<p>${elem}</p>`
        })
    }
}
const scrollToIntro = () => {
    const introSection = document.querySelector("#intro");
    introSection.scrollIntoView({ behavior: "smooth" });
};
const scrollToTerapia = () => {
    const terapiaSection = document.querySelector("#terapia");
    terapiaSection.scrollIntoView({ behavior: "smooth" });
};
const scrollToRendimiento = () => {
    const rendimientoSection = document.querySelector("#rendimiento");
    rendimientoSection.scrollIntoView({ behavior: "smooth", block: "start" });
};
const scrollToContacto = () => {
    const contactoSection = document.querySelector("#contacto");
    contactoSection.scrollIntoView({ behavior: "smooth" });
};


menuFunc()
slider()
