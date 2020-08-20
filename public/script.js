const modalOverlay = document.querySelector('.modal-overlay')

//REDIRECIONAMENTO
const pratos = document.querySelectorAll('.prato')

for ( let prato of pratos) {
    prato.addEventListener("click", function () {
        const receita = prato.getAttribute("id")
        window.location.href = `/receitas/${receita}`
        console.log("OPA")
    })
}

//PARTIAL
const buttons = document.querySelectorAll('.partial button')

//Mudar o nome 

for (let button of buttons) {
  button.addEventListener("click", function() {
    const text = button.textContent

    if (text == 'mostrar') {
        button.innerHTML = 'ocultar'
    } else {
        button.innerHTML = 'mostrar'
    }
  })
}
//Ocultar informações

for (let button of buttons) {
    button.addEventListener("click", function() {
        const id = button.getAttribute("id")
        const info = document.querySelector(`.partial a#${id}`)
        info.classList.toggle('displayNone')
        //console.log(id)
        console.log(info)    
    })
}
const buttons = document.querySelectorAll('.input span')

for (button of buttons) {
    button.addEventListener("click", alert('FOI!'))

}

