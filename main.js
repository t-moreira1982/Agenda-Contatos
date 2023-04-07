const form = document.getElementById('form-agenda');
const imgHi = '<img src="./images/robot.png" alt="Emoji robô"/>'
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já foi inserido`);
    } else {
        nomes.push(inputNome.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${imgHi}</td>`;
        linha += `</tr>`;

        linhas += linha;

    }

    inputNome.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
