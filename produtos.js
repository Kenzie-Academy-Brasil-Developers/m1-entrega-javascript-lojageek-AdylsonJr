
const listaDeItens = []  

function item(imagem, nome, preco, secao){
const object = {
    imagem: imagem,
    nome: nome,
    preco: preco,
    secao: secao
}
const novoItem = object
listaDeItens.push(novoItem)  
}

item("clock.jpg", "Relógio", 10.00, "quadros")

item("animewoman.jpg", "SailorMoon", 20.00, "bonecos")

item("dragonballpersonagem.jpg", "Goku", 50.00, "bonecos")

item("starwarspersonagem.jpg", "Baby Yoda", 120.00, "bonecos")

item("gamepad.jpg", "Alma Gamer", 10.00, "quadros")

item("personagem.jpg", "C3PO", 15.00, "quadros")
