function carregar () {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()

    
    if ( hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas da manha.`
        imagem.src = 'manha.png'
        document.body.style.background = 'rgb(217, 231, 16)'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
        imagem.src = 'tarde.png'
        document.body.style.background = 'rgb(140, 154, 236)'
    } else {
        msg.innerHTML = `Agora são ${hora} horas da noite.`
        imagem.src = 'noite.png'
        document.body.style.background = 'rgb(25, 54, 219)'
    }

}