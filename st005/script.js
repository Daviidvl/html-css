function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src','img/criança H.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','img/adiolecente H.jpg')
            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src','img/adulto h.jpg')
            }  else {
                //idoso
                img.setAttribute('src','img/velho h.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/criança M.jpg')
            } else if (idade < 21){
                //jovem
                 img.setAttribute('src','img/adolecente M.jpg')
            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src','img/adulta M.jpg')
            }  else {
                //idoso
                img.setAttribute('src','img/velha m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
       
    }
}