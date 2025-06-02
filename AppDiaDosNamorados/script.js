document.addEventListener('DOMContentLoaded', () => {
    const remetenteInput = document.getElementById('remetente');
    const destinatarioInput = document.getElementById('destinatario');
    const mensagemProntaSelect = document.getElementById('mensagem-pronta');
    const mensagemPersonalizadaTextarea = document.getElementById('mensagem-personalizada');
    const gerarCartaoBtn = document.getElementById('gerar-cartao');
    const baixarCartaoBtn = document.getElementById('baixar-cartao');
    
    const cartaoDiv = document.getElementById('cartao');
    const paraNomeElem = cartaoDiv.querySelector('.para-nome');
    const conteudoMensagemElem = cartaoDiv.querySelector('.conteudo-mensagem');
    const deNomeElem = cartaoDiv.querySelector('.de-nome');

    // Oculta a textarea de mensagem personalizada se uma mensagem pronta for selecionada
    mensagemProntaSelect.addEventListener('change', () => {
        if (mensagemProntaSelect.value !== "") {
            mensagemPersonalizadaTextarea.style.display = 'none';
            mensagemPersonalizadaTextarea.value = ''; // Limpa a personalizada
        } else {
            mensagemPersonalizadaTextarea.style.display = 'block';
        }
    });

    // Oculta o select de mensagem pronta se a textarea personalizada for digitada
    mensagemPersonalizadaTextarea.addEventListener('input', () => {
        if (mensagemPersonalizadaTextarea.value !== "") {
            mensagemProntaSelect.style.display = 'none';
            mensagemProntaSelect.value = ''; // Reseta a pronta
        } else {
            mensagemProntaSelect.style.display = 'block';
        }
    });

    gerarCartaoBtn.addEventListener('click', () => {
        const remetente = remetenteInput.value || 'Um Admirador Secreto';
        const destinatario = destinatarioInput.value || 'Alguém Especial';
        let mensagem = mensagemProntaSelect.value;

        if (mensagemPersonalizadaTextarea.value !== "") {
            mensagem = mensagemPersonalizadaTextarea.value;
        } else if (mensagem === "") { // Se nenhuma mensagem pronta foi selecionada e nenhuma personalizada digitada
            mensagem = "Você é incrível! Com muito carinho."; // Mensagem padrão
        }

        paraNomeElem.textContent = `Para: ${destinatario}`;
        conteudoMensagemElem.textContent = mensagem;
        deNomeElem.textContent = `De: ${remetente}`;

        // Exibe o botão de download após gerar o cartão
        baixarCartaoBtn.style.display = 'block';
    });

    // Funcionalidade de download do cartão (requer a biblioteca html2canvas)
    // Para que isso funcione, os alunos precisarão adicionar:
    // <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    // Logo acima da linha <script src="script.js"></script> no index.html
    baixarCartaoBtn.addEventListener('click', () => {
        // Oculta temporariamente o botão de download para não aparecer na imagem
        baixarCartaoBtn.style.display = 'none'; 
        
        // Usa html2canvas para renderizar a div do cartão em uma imagem
        html2canvas(cartaoDiv).then(canvas => {
            const link = document.createElement('a');
            link.download = 'cartao-de-afeto.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });

        // Reexibe o botão de download
        baixarCartaoBtn.style.display = 'block';
    });
});