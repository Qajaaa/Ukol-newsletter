const formular = document.querySelector("#newsletter")

formular.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = e.target.querySelector("input").value
    formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`

})

const inputCheck = document.querySelector("input")

inputCheck.addEventListener("input", (e) =>{
    e.preventDefault()
    const email = inputCheck.value
    const zavinac = email.indexOf("@")

    if (email == ""||zavinac <0) 
        {
        inputCheck.classList.add("inputBorder")  
        }
    else{
        inputCheck.classList.remove("inputBorder")
        }

    })
