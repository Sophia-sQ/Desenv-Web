let convidados = ["Rafaela", "Felipe", "SAIR", "Nicolas", "Amado", "Miguel"];
let entrada = [];
let i = 0;
while (entrada.length < 5) {
 console.log("Processando convidado: ", convidados[i]);

 if (convidados[i] == "SAIR") {
    break;
 }
 
 entrada.push(convidados[i]);
 i++;
}
if (entrada.length >= 5) {console.log("Lotação esgotada!");}
console.log("convidados cadastrados:", entrada);
