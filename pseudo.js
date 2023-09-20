document.getElementById("forSubmit1").style.color = "white"
document.getElementById("forSubmit1").style.background = "red"
document.getElementById("forSubmit2").style.color = "white"
document.getElementById("forSubmit2").style.background = "red"


document.getElementById("contentP").style.color = "blue"

function changeText(){
    document.getElementById("contentP").innerHTML = "The paragraph has changed"
}

function getFormFieldValue(){
    console.log(document.getElementById("userEmail").value);
}