function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'BBM.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','AdolecenteM.jpg')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src','Homem.jpg')
            } else {
                //idoso
                img.setAttribute('src','Velho.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'BBF.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','AdolecenteF.jpg')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src','Mulher.jpg')
            } else {
                img.setAttribute('src','Velha.jpg')
            }
        }
        
        res.innerHTML = `Você tem ${idade} anos e é ${gênero}.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }

}