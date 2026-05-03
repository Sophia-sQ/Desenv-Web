function validarNumero() {
    //Acessa elementos no HTML
    let numero = document.getElementById("numero").value;
    let mensagem = document.getElementById("mensagem");

    //impede entrada vazia
    if (numero === "") {
        mensagem.textContent = "Por favor, insira um número.";
        mensagem.style.color = "red";
    } else {
        //converte para inteiro a entrada recebida
        numero = parseInt(numero);
        
        //Verifica os valores e exibe mensagens de acordo com o valor
        if (numero > 10) {
            mensagem.textContent = "O número é maior que 10.";
            mensagem.style.color = "green";
        } else if (numero > 5) {
            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
            mensagem.style.color = "orange";
        } else {
            mensagem.textContent = "O número é 5 ou menor.";
            mensagem.style.color = "blue";
        }
    }
}