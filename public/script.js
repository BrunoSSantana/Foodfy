//REDIRECIONAMENTO
const pratos = document.querySelectorAll('.prato')

for ( let prato of pratos) {
    prato.addEventListener("click", function () {
        const receita = prato.getAttribute("id")
        window.location.href = `/admin/recipes/${receita}`
        console.log("OPA")
    })
}

// ===PARTIAL=== \\
const buttons = document.querySelectorAll('.partial span')

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

//==========================================================================

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
  document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient);
//================>>>>>>============>>>>>>===>>
function addPreparation() {
  const preparations = document.querySelector("#preparations");
  const fieldContainer = document.querySelectorAll(".preparation");

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  preparations.appendChild(newField);
}

document
  .querySelector(".add-preparation")
  .addEventListener("click", addPreparation);
