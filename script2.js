document.body.getElementsByTagName("button")[0].addEventListener("click", ()=>{
    window.location.href = "index.html"
})

let urlparameter = new URLSearchParams(window.location.search)
let email = urlparameter.get("email")
console.log(email)

document.body.getElementsByClassName("para")[0].innerHTML = `A confirmation email has been sent to <b> ${email} </b> Please open it and click the button inside to
                confirm your subscription.`