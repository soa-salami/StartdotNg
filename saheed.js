function validate(){
    var name = document.contactForm.name.value;
    if(name === null || name === ""){
        alert("Name can't be blank");
        return false;
    } else if (name.length < 4){
        alert("Name must be at least 4 character long");
        return false;
    }
}
function validate(){
    var email = document.contactForm.email.value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
}
function validate(){
    var message = document.contactForm.message.value;
    if(message === null || message === ""){
        alert("Message can't be blank");
        return false;
    } else if (message.length < 20){
        alert("Message must be at least 20 character long")
        return false;
    }
}
