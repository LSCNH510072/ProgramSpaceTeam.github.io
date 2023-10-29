function yejian() {
    document.body.style.transition = 'all 0.5s'
    document.body.style.color = '#ddd'
    document.body.style.backgroundColor = 'rgba(30, 30, 30, 1)'
    document.getElementById('input').style.backgroundColor = '#444'
    document.getElementById('input').style.color = '#ddd'
    document.getElementById('inbtn').style.fill = '#ddd'
    if (web) {
        document.getElementById('webtn').style.color = '#ddd'
    } else {
        document.getElementById('webtn').style.color = '#888'
    }
}

function baitian() {
    document.body.style.transition = 'all 0.5s'
    document.body.style.color = '#000'
    document.body.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    document.getElementById('input').style.backgroundColor = '#fff'
    document.getElementById('input').style.color = '#000'
    document.getElementById('inbtn').style.fill = '#000'
    if (web) {
        document.getElementById('webtn').style.color = '#000'
    } else {
        document.getElementById('webtn').style.color = '#656565'
    }
}

function editsvg() {
    var svgc = document.getElementById('yb')
    if (yj) {
        svgc.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>'
    } else {
        svgc.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>'
    }
}
