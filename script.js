
let vitrineQuadros = document.querySelector(".quadros")
let vitrineBonecos = document.querySelector(".bonecos")

 //LISTAR OS PRODUTOS
function listarProdutos(listaProdutos, secaoVitrine, vitrine){

    //LOOP PARA PERCORRER OS PRODUTOS
    for(let i = 0; i<listaProdutos.length; i++){
        
        let produto = listaProdutos[i]
        let secaoProduto = produto.secao
        
        //VERIFICANDO DEPARTAMENTO
        if(secaoProduto == secaoVitrine){
            let cardProduto = criarCardProduto(produto)
            vitrine.appendChild(cardProduto)
        }
    }
   
}
listarProdutos(listaDeItens, "quadros", vitrineQuadros)
listarProdutos(listaDeItens, "bonecos", vitrineBonecos)

 function criarCardProduto(produto){

    //1) ACESSAR OS DADOS DO PRODUTO 
    let nome            = produto.nome
    let preco           = produto.preco
    let imagem        = produto.imagem
    
  
    //2) CRIANDO ELEMENTOS
    let tagLi       = document.createElement("li")
    let tagImge     = document.createElement("img")
    let tagNome     = document.createElement("h2")
    let tagPreco    = document.createElement("p")
    
    tagImge.classList.add("imagemProduto")
    
    //3) ALIMENTAR ESSAS TEGAS COM AS INFORMAÇÕES 
    tagImge.src          = `./assets/img/imagens/${imagem}`
    tagImge.alt          = nome
    tagNome.innerText    = nome
    tagPreco.innerText   = `R$ ${preco}`.replace(".",",")
  
    //4) MONTANDO O TEMPLATE
    tagLi.appendChild(tagImge)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)

    return tagLi
}
    