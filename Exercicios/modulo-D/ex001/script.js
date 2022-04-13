function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#dfc65e'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#d05723'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#071c1f'
    }
}
