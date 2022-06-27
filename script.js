function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours() + "h" + data.getMinutes() + "min"
    msg.innerHTML = `Agora são ${hora}.`

    if (hora>=0 && hora<12) {
        // BOM DIA
        img.src = "manha.jpg"
        document.body.style.background = 'rgb(240, 217, 3)'
    } else if (hora>=12 && hora<18) {
        // BOA TARDE
        img.src = "tarde.jpg"
        document.body.style.background = 'rgb(176, 81, 13)'
    } else {
        //BOA NOITE
        img.src = "noite.jpg"
        document.body.style.background = 'rgb(11, 15, 57)'
    }
}