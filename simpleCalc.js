let visor = document.querySelector(".visor");

function botao(num) {
    let numero = document.calculadora.visor.value;
    document.calculadora.visor.value = numero + num;
}

// console.log(num);

function reset() {
    visor.value = clear();
}

function calcule() {

    let pegaOperacao = visor.value;
    resultado = eval(pegaOperacao);
    let numero = document.calculadora.visor.value;
    document.calculadora.visor.value = resultado;
}

// function apaga() {
//     let texto = document.querySelector(".visor").val();
//     $(".visor").val(texto.substring(0, texto.length - 1));
// }

let texto = document.querySelector("#excluir");
texto.click(function() {
    let input = document.querySelector('#txt');
    input.val(input.val().slice(0, -1));
    console.log(texto.value);
});