let entrada = [];

//garante que não sejam adicionados mais convidados após o SAIR
let cadastroEncerrado = 0

//Facilita caso seja necessário mudar o número máximo de convidados
const LOTACAO_MAXIMA = 5

function processamento() {

    //CASOS DE ERRO
    //parágrafo que exibe mensagem de lotação máxima
    const mensagem = document.getElementById("recado")

    //garante que não haja execução após o SAIR
    if (cadastroEncerrado !== 0) {

        return;

    }

    //garante que não haja execução após atingir a lotação máxima
    if (entrada.length >= LOTACAO_MAXIMA) {

        mensagem.textContent = "Lotação esgotada!";
        mensagem.style.color = "red"
        return;

    }

    const nome = document.getElementById("nome").value

    //impede entrada vazia
    if (nome == '') { return; }

    //FLUXO PRINCIPAL
    if (nome == "SAIR") {

        mensagem.textContent = "Cadastro encerrado.";
        mensagem.style.color = "blue"
        cadastroEncerrado = 1
        return;

    }

    const lista_ord = document.getElementById("lista")

    entrada.push(nome);

    //adiciona um novo item na lista ordenada
    let item = lista_ord.appendChild(document.createElement("li"))
    item.textContent = nome

    //Limpa a entrada após a execução
    document.getElementById("nome").value = '';

}