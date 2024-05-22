let alternaClasses = () => {
    var element = document.getElementById("elemento");
    
    if(element.classList.contains("classe1")) {
        element.classList.remove("classe1");
        element.classList.add("classe2");
    } else {
        element.classList.remove("classe2");
        element.classList.add("classe1");
    }
}