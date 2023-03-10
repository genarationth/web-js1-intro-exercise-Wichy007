function ChangeName (){
    let inputName = prompt('what is your name?');
    let element = document.getElementById('inputName');
    element.innerText = `Hello ${inputName}`;

}
