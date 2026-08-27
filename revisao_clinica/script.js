const clientes = [
    { nome: "Ana Silva", altura: 1.65, peso: 60 },
    { nome: "Bruno Costa", altura: 1.80, peso: 95 },
    { nome: "Carla Dias", altura: 1.60, peso: 45 },
    { nome: "Daniel Meireles", altura: 1.75, peso: 72 },
    { nome: "Elisa Borges", altura: 1.68, peso: 92 }
];


const calcularIMC = (peso, altura) => {
    return (peso / (altura * altura)).toFixed(2);
};


function gerarRelatorio() {
  
    const tbody = document.querySelector("tbody");
    
    tbody.innerHTML = ""; 

    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i];
        let imc = calcularIMC(cliente.peso, cliente.altura);
        let classificacao = "";

        switch (true) {
            case (imc < 18.5):
                classificacao = "Abaixo do peso";
                break;
            case (imc >= 18.5 && imc < 25):
                classificacao = "Peso Normal";
                break;
            case (imc >= 25 && imc < 30):
                classificacao = "Sobrepeso";
                break;
            case (imc >= 30):
                classificacao = "Obesidade";
                break;
            default:
                classificacao = "Indefinido";
        }

        let tr = document.createElement("tr");

        let tdNome = document.createElement("td");
        tdNome.textContent = cliente.nome;

        let tdIMC = document.createElement("td");
        tdIMC.textContent = imc;

        let tdClassificacao = document.createElement("td");
        tdClassificacao.textContent = classificacao;

        tr.appendChild(tdNome);
        tr.appendChild(tdIMC);
        tr.appendChild(tdClassificacao);

        tbody.appendChild(tr);
    }
}

document.querySelector("button").addEventListener("click", function() {
    gerarRelatorio();
});
