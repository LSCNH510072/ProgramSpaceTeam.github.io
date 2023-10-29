function atweb() {
    var webtn = document.getElementById('webtn')
    if (web) {
        if (yj) {
            webtn.style.color = '#ddd'
        } else {
            webtn.style.color = '#000'
        }
    } else {
        if (yj) {
            webtn.style.color = '#888'
        } else {
            webtn.style.color = '#656565'
        }
    }
}
