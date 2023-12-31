
    function verificarResposta() {
        const respostaOriginal = document.getElementById('respostaInput').value;
        const resposta = respostaOriginal.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let feedback = '';

        const regex = /vem\s*ca,?\s*sobrinho/i;

        if (regex.test(resposta)) {
            feedback = 'Parabéns, que boa memória você tem hein! 😊';
        } else {
            feedback = '❌ Errou, a memória falhou foi? A Resposta correta é: "Vem cá, sobrinho!"';
        }

        document.getElementById('feedback').textContent = feedback;
        document.getElementById('proximoBtn').style.display = 'block';
    }

document.getElementById('verificarBtn').addEventListener('click', verificarResposta);

// Event listener para a tecla Enter
document.getElementById('respostaInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificarResposta();
    }
});

document.getElementById('proximoBtn').addEventListener('click', function() {
    // Proximas perguntas
});


// cursor style
    function criarEstrela(e) {
        if (Math.random() > 0.21) { // Frequencia das estrelas
            const estrela = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            estrela.setAttribute('width', '40'); 
            estrela.setAttribute('height', '40'); 
            estrela.innerHTML = '<path d="M8 0L9.8659 5.13165H15.3301L10.7321 8.36835L12.598 13.5L8 10.2633L3.40195 13.5L5.26795 8.36835L0.669922 5.13165H6.13406L8 0Z" fill="red"/>';

            estrela.style.position = 'absolute';
            estrela.style.left = (e.pageX - 20) + 'px';
            estrela.style.top = (e.pageY - 20) + 'px'; 
            document.body.appendChild(estrela);

            setTimeout(function() {
                estrela.remove();
            }, 600); 
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

