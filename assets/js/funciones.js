
let badEmoji = "😑";
let goodEmoji = "😃";
let inputName = "";
let inputMail = "";
let inputMessage = "";

$(document).ready(function() {
    $('#myTable').DataTable({
        paging: false,
        searching:true
    });
});

function getInputValue() {
    
    inputName = document.getElementById('inputName').value;
    inputMail = document.getElementById('inputMail').value
    inputMessage = document.getElementById('textArea').value

    if (!inputName) {
        let lblName = document.getElementById('name');
        lblName.innerHTML = `${badEmoji} Nope, esto no puede estar vacio`;
        inputName = "";
    }else{   
        let lblName = document.getElementById('name');
        lblName.innerHTML = `${goodEmoji} Correcto! ${inputName}`
        console.log(inputName + 'else inputName');
    }
    
    if (!inputMail) {
        let lblMail = document.getElementById('mail');
        lblMail.innerHTML = `${badEmoji} Nope, esto no puede estar vacio`;
        console.log(inputMail + 'if inputMail');
    }else{
        let lblMail = document.getElementById('mail');
        lblMail.innerHTML = `${goodEmoji} Correcto! ${inputMail}`
    console.log(inputMail + 'else inputMail');
    }
    
    if (!inputMessage) {
        let lblMessage = document.getElementById('textMessage');
        lblMessage.innerHTML = `${badEmoji} Nope, esto no puede estar vacio`;
        console.log(inputMessage + 'if inputMessage');
    }else{
        let lblMessage = document.getElementById('textMessage');
        lblMessage.innerHTML = `${goodEmoji} Correcto! ${inputMessage}`
        console.log(inputMessage + 'else inputMessage');
    }
}

