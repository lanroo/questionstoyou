
document.getElementById('verificarBtn').addEventListener('click', function() {
    const resposta = document.getElementById('respostaInput').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let feedback = '';

    // Expressão regular para verificar as variações da resposta
    const regex = /porque tinha muitos problemas de solu[cç][aã]o/i;

    // Verifica se a resposta corresponde a alguma das variações válidas
    if (regex.test(resposta)) {
        feedback = 'Parabéns, ta afiada! 😊';
    } else {
        feedback = '❌ Errou, a resposta correta é:<br>Porque tinha muitos problemas de solução!';
    }

    document.getElementById('feedback').innerHTML = feedback;
    document.getElementById('nextBtn').style.display = 'block';
});

document.getElementById('nextBtn').addEventListener('click', function() {
    // Proximas perguntas
});


 // Função para ocultar o conjunto-total2
 function ocultarConjuntoTotal2() {
    const conjuntoTotal2 = document.getElementById("conjunto-total2");
    conjuntoTotal2.style.display = "none";
}

// Função para mostrar o conjunto-total2
function mostrarConjuntoTotal2() {
    const conjuntoTotal2 = document.getElementById("conjunto-total2");
    conjuntoTotal2.style.display = "block";

    // Oculta o conjunto-total após mostrar o conjunto-total2
    const conjuntoTotal = document.getElementById("conjunto-total");
    conjuntoTotal.style.display = "none";
}

window.onload = ocultarConjuntoTotal2;
const simBtn = document.getElementById("simBtn");
simBtn.addEventListener("click", mostrarConjuntoTotal2);
