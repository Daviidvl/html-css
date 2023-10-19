function updateTime (){
    var msg = document.getElementById('msg')
    var dat = document.getElementById('dat')
    var img = document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    
    if (hora >= 0 && hora < 12){
        //Bom dia
        msg.innerHTML=` ${hora}:${minuto}:${segundo} `
        img.src = `img/manha1.jpg`
        document.body.style.background = '#2E112D'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        msg.innerHTML=`${hora}:${minuto}:${segundo} `
        img.src = 'img/tarde1.jpg'
        document.body.style.background = '#000030'
    }
    else {
        msg.innerHTML=`${hora}:${minuto}:${segundo} `
        img.src = 'img/noite1.jpg'
        document.body.style.background = '#01002A'
    }
}
setInterval(updateTime, 1000);
updateTime();
