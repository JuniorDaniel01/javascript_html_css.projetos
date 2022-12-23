
let nota1 = Number(window.prompt(`Digite a sua nota1: `))
let nota2 = Number(window.prompt(`Digite a sua nota2: `))
let nota3 = Number(window.prompt(`Digite a sua nota3: `))
let nota4 = Number(window.prompt(`Digite a sua nota4: `))

let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1)
//console.log(media)

document.write(`A média final do aluno somando todas ás unidades foi de: ${media}`)

