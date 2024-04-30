function mudarCor(){
    var square = document.getElementById('square');
    var currentColor = square.style.backgroundColor;
    //gerar uma cor aleatória
    var newColor = getRandomColor();
    //Evita que a color aletória seja a mesma que a atual
    while(newColor === currentColor){
        newColor = getRandomColor();
    }
    //alterar a cor
    square.style.backgroundColor = newColor;
}

function getRandomColor(){
    var letras = '0123456789ABCDEF'
    var cores = '#';
    for (var i=0; i<6; i++){
        cores += letras[Math.floor(Math.random()*16)];

    }
    return cores;
}