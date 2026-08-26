const clientes = [
  { nome: "Ana Silva", altura: 1.65, peso: 60 },
  { nome: "Bruno Costa", altura: 1.80, peso: 95 },
  { nome: "Carla Dias", altura: 1.60, peso: 45 },
  { nome: "Daniel Meireles", altura: 1.75, peso: 7 }
];

const btn=document.getElementById('btn')
const table=document.getElementById('tbody')

let r=true;


function gerar_relatorio(){
    
    if (r==true) {
        
    for (let i = 0; i < clientes.length; i++) {
        const trow=document.createElement('tr')
        table.appendChild(trow)
        for (const key in clientes[i]) {
            td=document.createElement('td')
            td.textContent=clientes[i][key]
            //document.trow.appendChild(td)
            trow.appendChild(td)
        }
        
    }
    r=false;
}
}
