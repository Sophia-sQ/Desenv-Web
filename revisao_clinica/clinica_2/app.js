class Paciente {
    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = parseFloat(altura);
        this.peso = parseFloat(peso);
    }

    calcularIMC() {
        if (!this.altura) return '0.00';
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    getClassificacao() {
        const imc = this.calcularIMC();
        if (imc < 18.5) return 'Abaixo do Peso';
        if (imc <= 24.9) return 'Peso Normal';
        if (imc <= 29.9) return 'Sobrepeso';
        if (imc <= 34.9) return 'Obesidade I';
        if (imc <= 39.9) return 'Obesidade II';
        return 'Obesidade III';
    }
}

const form = document.querySelector('#form_paciente') || document.querySelector('form');
const tabela = document.querySelector('#corpo_tabela') || document.querySelector('tbody');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.querySelector('#nome_paciente').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    
    const paciente = new Paciente(nome, altura, peso);

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${paciente.nome}</td>
        <td>${paciente.altura.toFixed(2)}</td>
        <td>${paciente.peso.toFixed(1)}</td>
        <td><strong>${paciente.calcularIMC()}</strong></td>
        <td>${paciente.getClassificacao()}</td>
    `;

    tabela.appendChild(tr);
    form.reset();
});