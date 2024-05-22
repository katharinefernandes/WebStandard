let alteraCorFundo = () => {
    var element = document.getElementById("color");

    let corFundo = element.value.toString();

    if(corFundo) {
        document.body.style.backgroundColor = '#' + corFundo;
    } else {
        document.body.style.backgroundColor = '#fff';
    }

}