const form = document.getElementById('form-contatos');
const inputNome = document.getElementById('input-nome');
const inputTel = document.getElementById('input-telefone'); 
const select = document.getElementById('select');
const peDaTabela = document.querySelector('.resultado');
const corpoTabela = document.querySelector('tbody');

const nomes = [];
const telefones= [];

let linhas = '';
let peDaLinhas = '';


inputTel.addEventListener('keyup', function(e){
    let input = e.target;
    input.value = mascaraCelular(inputTel.value);
})

function mascaraCelular(value){
    if (!value){
        return " ";
    } else {
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        return value;
    }
};

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
};


function atualizaTabela(){
   
    corpoTabela.innerHTML = linhas;
    peDaTabela.innerHTML = `Contatos salvos: ${nomes.length}`;
};