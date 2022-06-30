var output = document.getElementById("output");

function Display(input){
    output.value += input;
}
function Calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(error){
        alert("Bad Input");
    }
}
function Clear(){
    output.value = "";
}
function Del(){
    output.value = output.value.slice(0,-1);
}