
document.getElementById('verificarBtn').addEventListener('click', function() {
    const resposta = document.getElementById('respostaInput').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let feedback = '';

    // Verifica se a resposta é uma das variações válidas
    if (resposta === 'vem ca sobrinho' || resposta === 'vou la tio') {
        feedback = 'Parabéns, que boa memória você tem hein!';
    } else {
        feedback = 'Errou, a memória falhou foi? Resposta: Vem cá, sobrinho!';
    }

    document.getElementById('feedback').textContent = feedback;
    document.getElementById('proximoBtn').style.display = 'block';
});

document.getElementById('proximoBtn').addEventListener('click', function() {
    // Proximas perguntas
});


// cursor style
function criarEstrela(e) {
    if (Math.random() > 0.21) { // Ajuste para controlar a frequência das estrelas
        const estrela = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        estrela.setAttribute('width', '40'); // Aumente o tamanho horizontal
        estrela.setAttribute('height', '40'); // Aumente o tamanho vertical
        estrela.innerHTML = '<path d="M8 0L9.8659 5.13165H15.3301L10.7321 8.36835L12.598 13.5L8 10.2633L3.40195 13.5L5.26795 8.36835L0.669922 5.13165H6.13406L8 0Z" fill="red"/>';

        estrela.style.position = 'absolute';
        estrela.style.left = (e.pageX - 20) + 'px'; // Centraliza a estrela no cursor
        estrela.style.top = (e.pageY - 20) + 'px'; // Centraliza a estrela no cursor
        document.body.appendChild(estrela);

        setTimeout(function() {
            estrela.remove();
        }, 600); // Ajustar a duração que a estrela permanece na tela
    }
}



// Event listener para o movimento do mouse
document.addEventListener('mousemove', criarEstrela);

const botoes = document.querySelectorAll('button');
botoes.forEach(function(botao) {
    botao.addEventListener('mouseenter', function() {
        document.removeEventListener('mousemove', criarEstrela);
    });
    botao.addEventListener('mouseleave', function() {
        document.addEventListener('mousemove', criarEstrela);
    });
});

const input = document.querySelector('input#respostaInput');
input.addEventListener('mouseenter', function() {
    document.removeEventListener('mousemove', criarEstrela);
});

input.addEventListener('mouseleave', function() {
    document.addEventListener('mousemove', criarEstrela);
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

