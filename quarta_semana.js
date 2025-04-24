
function adicionarAtividadeUm(){
    document.getElementById('atividadeUm').innerHTML = 'Hello World!';
}

function adicionarAtividadeDois() {
    let a = Number(document.getElementById('primeiroValor').value);

    let b = Number(document.getElementById('segundoValor').value);


    let resultado = a+b;

    document.getElementById('atividadeDois').innerHTML = resultado;

}

function adicionarAtividadeTres() {
    document.getElementById('atividadeTres').innerHTML = 'Elemento alterado pelo Id!';
}

function adicionarAtividadeQuatro() {
    let atividadeQuatro = document.getElementsByName('atividadeQuatro')[0];
    atividadeQuatro.innerHTML = 'Elemento alterado pelo nome!';
}

function adicionarAtividadeCinco() {
    let atividadeCinco = document.querySelector('.atividadeCinco');
    atividadeCinco.classList.toggle('classeMudada')
    if (atividadeCinco.classList.contains('classeMudada')) {
        atividadeCinco.innerHTML = 'Elemento alterado pela classe!';
    } else {
        atividadeCinco.innerHTML = 'Elemento não alterado.';
    }
}