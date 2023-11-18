document.getElementById('verificarBtn').addEventListener('click', verificarResposta);

function verificarResposta() {
    const respostaOriginal = document.getElementById('respostaInput').value;
    const resposta = respostaOriginal.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let feedback = '';

    const regex = /pq ele (n[aã]o|nao) tem estomago( para isso| pra isso)?|porque ele (n[aã]o|nao) tem estomago( para isso| pra isso)?/i;

    if (regex.test(resposta)) {
        feedback = 'Parabéns, ta afiada! 😊';
    } else {
        feedback = '❌ Errou, a resposta correta é: "Porque ele não tem estômago para isso!" 🦴';
    }

    document.getElementById('feedback').innerHTML = feedback;
    document.getElementById('proxBtn').style.display = 'block';
}

// Event listener para a tecla Enter
document.getElementById('respostaInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // 13 é o código da tecla Enter
        verificarResposta();
    }
});

document.getElementById('proxBtn').addEventListener('click', function() {
    // Proximas perguntas
});


 function ocultarConjuntoTotal2() {
    const conjuntoTotal2 = document.getElementById("conjunto-total2");
    conjuntoTotal2.style.display = "none";
}

function mostrarConjuntoTotal2() {
    const conjuntoTotal2 = document.getElementById("conjunto-total2");
    conjuntoTotal2.style.display = "block";

    const conjuntoTotal = document.getElementById("conjunto-total");
    conjuntoTotal.style.display = "none";
}

window.onload = ocultarConjuntoTotal2;
const simBtn = document.getElementById("simBtn");
simBtn.addEventListener("click", mostrarConjuntoTotal2);
