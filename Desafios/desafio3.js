for(let caixa=0; caixa<10; caixa+=1){
  if (caixa===4 || caixa === 7) {continue;}
  if (caixa===8){
    console.log(`Caixa ${caixa+1} com erro`);
    break;
  } else {
    console.log(`Caixa ${caixa+1} OK`);
  }
}
