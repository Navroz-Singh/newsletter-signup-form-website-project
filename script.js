console.log("hello")
let imag = document.body.querySelector("#responsive_img")


function isValidEmail(email) {
    const parts = email.split('@');
    
    if (parts.length !== 2) {
        return false;
    }

    const localPart = parts[0];
    const domainPart = parts[1];

    if (!localPart || !domainPart) {
        return false;
    }

    if (domainPart.indexOf('.') === -1) {
        return false;
    }

    const domainParts = domainPart.split('.');

    if (domainParts.some(part => part.length === 0)) {
        return false;
    }

    const validLocalChars = /^[a-zA-Z0-9._-]+$/;
    if (!validLocalChars.test(localPart)) {
        return false;
    }

    const validDomainChars = /^[a-zA-Z0-9.-]+$/;
    if (!validDomainChars.test(domainPart)) {
        return false;
    }

    const validSubdomainChars = /^[a-zA-Z0-9-]+$/;
    if (domainParts.some(part => !validSubdomainChars.test(part))) {
        return false;
    }

    if (domainParts[domainParts.length - 1].length < 2) {
        return false;
    }

    return true;
}

if(window.innerWidth< 700){
    imag.src = "assets/illustration-sign-up-mobile.svg"
}else{
    imag.src =  "assets/illustration-sign-up-desktop.svg"
}


window.addEventListener("resize", ()=>{
    if(window.innerWidth< 700){
        imag.src = "assets/illustration-sign-up-mobile.svg"
    }else{
        imag.src =  "assets/illustration-sign-up-desktop.svg"
    }
})

let email;


document.body.getElementsByTagName("button")[0].addEventListener("click", (e)=>{

    email = document.body.getElementsByTagName("input")[0].value;

    if(!isValidEmail(email)){
        error.innerHTML = "Valid email required"
        document.getElementsByClassName("input_email")[0].classList.add("input_error")
        document.getElementsByClassName("input_email")[0].classList.remove("input_normal")
    }else{
        e.preventDefault();
        email = document.body.getElementsByTagName("input")[0].value;
        window.location.href = "index2.html?email=" + encodeURIComponent(email);
    }

    

})


document.getElementsByClassName("input_email")[0].addEventListener("input", ()=>{
    error.innerHTML = ""
    document.getElementsByClassName("input_email")[0].classList.remove("input_error")
    document.getElementsByClassName("input_email")[0].classList.add("input_normal")
})
