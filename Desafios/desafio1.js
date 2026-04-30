nome=['nome1', 'nome2',  'nome3', 'SAIR', 'nome5'];
i=0;
const max=5

while (i<max) {
  console.log(nome[i])
  if (nome[i]!='SAIR') {
    console.log(`${nome[i]} adicionado.`)
  } else {
    console.log("SAINDO...")
    break
  }
  i+=1;
}
if (i>=max) {
      console.log(`Lotação esgotada! Temos ${max} inscritos.`)
    }
