document.getElementById('verificarBtn').addEventListener('click', function() {
    const respostaOriginal = document.getElementById('respostaInput').value;
    const resposta = respostaOriginal.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let feedback = '';

    // Variações de perguntas
    const regex = /pq ele n[aõ]o tem estomago (pra isso)?|porque ele n[aõ]o tem estomago (para isso)?/i;

   
    if (regex.test(resposta)) {
        feedback = 'Parabéns, ta afiada! 😊';
    } else {
        feedback = '❌ Errou, a resposta correta é: "Porque ele não tem estômago para isso!" 🦴';
    }

    document.getElementById('feedback').innerHTML = feedback;
    document.getElementById('proxBtn').style.display = 'block';
});

document.getElementById('proxBtn').addEventListener('click', function() {
    // outras perguntas
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
