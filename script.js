const form = document.getElementById('form-contatos');
const inputNome = document.getElementById('input-nome');
const inputTel = document.getElementById('input-telefone'); 
const select = document.getElementById('select');
const peDaTabela = document.querySelector('tfoot');
const corpoTabela = document.querySelector('tbody');

//colocar a soma ou nomes.length;
//colocar o inputNome pra não ser igual
// e colocar um else;
//qualquer coisa, voltar para a aula = calculando as médias;

const nomes = [];
const telefones= [];

let linhas = '';
let peDaLinhas = '';



form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinhaTBody();
    atualizaTabela();
      
});

function adicionaLinhaTBody(){

    if (nomes.includes(inputNome.value)){
        alert(`O nome ${inputNome.value} já foi cadastrado`)

    } else if (telefones.includes(inputTel.value)){
        alert(`O número de ${inputTel.value} já está cadastrado`)
        
    }  else {

        nomes.push(inputNome.value);
        telefones.push(inputTel.value)

        let linha = `<tr>`;
        linha += `<td> ${inputNome.value} </td>`;
        linha += `<td> ${inputTel.value}</td>`;
        linha += `<td> ${select.value}</td>`;
        linhas += linha;

        inputNome.value = '';
        inputTel.value = '';
    }

  
}


function atualizaTabela(){
   
    corpoTabela.innerHTML = linhas;
    peDaTabela.innerHTML = `Contatos salvos: ${nomes.length}`;
}