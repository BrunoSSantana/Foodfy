// const ul = document.querySelector()
// const button = document.querySelectorAll()
// const input = document.querySelector()

arrayElement = [
    "Bruno",
    "Vida",
    "Ana"
]

function renderElements() {
    for (item of arrayElement) {
        const li = document.createAttribute('li')
        const txt = document.createTextNode(item)

        li.appendChild(txt)
        
    }
}

renderElements()