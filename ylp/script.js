function homef() {
    home.style.opacity = 1
}
const home = document.getElementById('home')
const home2 = document.getElementById('home2')
const home3 = document.getElementById('home3')
const home4 = document.getElementById('home4')
const home5 = document.getElementById('home5')
const home6 = document.getElementById('home6')

function homey() {
    home.style.opacity = 0
}
function homef2() {
    home2.style.opacity = 1
}
function homey2() {
    home2.style.opacity = 0
}
function homef3() {
    home3.style.opacity = 1
}
function homey3() {
    home3.style.opacity = 0
}
function homef4() {
    home4.style.opacity = 1
}
function homey4() {
    home4.style.opacity = 0
}
function homef5() {
    home5.style.opacity = 1
}
function homey5() {
    home5.style.opacity = 0
}
function homef6() {
    home6.style.opacity = 1
}

window.onload = function() {
    homef()
    setTimeout(homey, 1500)
    setTimeout(homef2, 3000)
    setTimeout(homey2, 4500)
    setTimeout(homef3, 6000)
    setTimeout(homey3, 7500)
    setTimeout(homef4, 9000)
    setTimeout(homey4, 10500)
    setTimeout(homef5, 12000)
    setTimeout(homey5, 13500)
    setTimeout(homef6, 15000)
}
