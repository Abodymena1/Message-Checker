var inputEl = document.getElementById('input');
var btnEl = document.getElementById('btn');
var msEl = document.getElementById('ms');



btnEl.onclick = function(){

    var InputValue = input.value;

    if (InputValue !=""){

        msEl.innerHTML = InputValue;

        input.value = "";
    }

}