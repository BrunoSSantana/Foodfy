const modalOverlay = document.querySelector('.modal-overlay')

/*=== ATIVAR MODAL ===*/

/* for (let prato of pratos) {
    prato.addEventListener("click", function () {
        modalOverlay.classList.add('active')
    })
} */

/* --------------------------------------------- */

/*=== FECHAR MODAL=== */

/* document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove('active')
}) */

/* ---------------------------------------------- */

/* === ADICIONAR INFOS NO MODAL === */

/* for (let prato of pratos) {
    const imgModal = document.querySelector(" .modal-overlay .modal .modal-content img")
    prato.addEventListener("click", function () {
        const src = prato.querySelector("img").src
        imgModal.setAttribute("src", src)
    })
}

for (let prato of pratos) {
    const h4prato = document.querySelector(".modal-overlay .modal .modal-content h4")
    prato.addEventListener("click", function () {
        const txt = prato.querySelector("h4").textContent

        h4prato.innerHTML = txt
        
        console.log(txt)
        console.log("opa")
    })
}

for (let prato of pratos) {
    const autor = document.querySelector(".modal-overlay .modal .modal-content p")
    prato.addEventListener("click", function () {
        const txt = prato.querySelector("p").textContent

        autor.innerHTML = txt
        
        console.log(txt)
        console.log("opa")
    })
} */

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