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
    somaContatos();
      
});

function adicionaLinhaTBody(){

    nomes.push(inputNome.value);
    telefones.push(inputTel.value);

    let linha = `<tr>`;
    linha += `<td> ${inputNome.value}</td>`;
    linha += `<td> ${inputTel.value}</td>`;
    linha += `<td colspan="3"> ${select.value}</td>`;
    linha += `</tr>`;
    linhas += linha;

    let peDaLinha = `<tr>`;
    peDaLinha += `<td> ${nomes.length}</td>`;
    peDaLinha += `</tr>`;
    peDaLinhas += peDaLinha;

  
}

function somaContatos(){

    
}

function atualizaTabela(){
   
    peDaTabela.innerHTML = peDaLinhas;
    corpoTabela.innerHTML = linhas;

    
}