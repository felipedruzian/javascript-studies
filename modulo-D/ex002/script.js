function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Digite um ano válido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Masculino'
            if (idade >= 0 && idade < 6) {
                img.setAttribute('src', 'img/bebe.png')
            } else if (idade < 16) {
                img.setAttribute('src', 'img/crianca-m.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/adulto-m.png')
            } else {
                img.setAttribute('src','img/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Feminino'
            if (idade >= 0 && idade < 6) {
                img.setAttribute('src', 'img/bebe.png')
            } else if (idade < 16) {
                img.setAttribute('src', 'img/crianca-f.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/adulto-f.png')
            } else {
                img.setAttribute('src', 'img/idoso-f.png')
            }
        } else {
            gen = 'Indefinido'
            if (idade >= 0 && idade < 6) {
                img.setAttribute('src', 'img/bebe.png')
            } else if (idade < 16) {
                img.setAttribute('src', 'img/crianca-u.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'img/jovem-u.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/adulto-u.png')
            } else {
                img.setAttribute('src', 'img/idoso-u.png')
            }
        }
        res.innerHTML = `Genero ${gen} e idade de ${idade} anos`
        res.appendChild(img)
    }
}