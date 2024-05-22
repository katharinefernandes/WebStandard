let verificaInputs = () => {

    var elements = document.getElementsByClassName("input");

    let qtdElementosPreenchidos = 0;
    let qtdInputs = elements.length;

    for (let index = 0; index < qtdInputs; index++) {
        var element = elements[index];

        if(element.value) {
            qtdElementosPreenchidos++;
        }
        
    }

    if (qtdElementosPreenchidos == qtdInputs) {
        // não lembro como se faz :(
        //document.getElementById("button").remove("disabled");
    }


}
