// Adicione um novo botão no index.html: <button id="enviar-whatsapp" style="display: none;">Enviar por WhatsApp</button>

const enviarWhatsappBtn = document.getElementById('enviar-whatsapp');

// Dentro do `gerarCartaoBtn.addEventListener` ou em uma nova função:
gerarCartaoBtn.addEventListener('click', () => {
    // ... (código existente para gerar o cartão) ...
    baixarCartaoBtn.style.display = 'block'; // Já existente
    enviarWhatsappBtn.style.display = 'block'; // Mostrar o botão do WhatsApp
});

enviarWhatsappBtn.addEventListener('click', () => {
    const destinatario = destinatarioInput.value || 'Alguém Especial';
    const remetente = remetenteInput.value || 'Um Admirador Secreto';
    let mensagem = mensagemProntaSelect.value;
    if (mensagemPersonalizadaTextarea.value !== "") {
        mensagem = mensagemPersonalizadaTextarea.value;
    } else if (mensagem === "") {
        mensagem = "Você é incrível! Com muito carinho.";
    }

    // Codifica a mensagem para URL
    const mensagemWhatsapp = encodeURIComponent(`De: ${remetente}\nPara: <span class="math-inline">\{destinatario\}\\n\\n</span>{mensagem}\n\n(Cartão criado no meu app! 😊)`);

    // Abre o WhatsApp com a mensagem predefinida
    // Usa "wa.me/" para mobile e web, ou "api.whatsapp.com/send?text=" para desktop
    window.open(`https://wa.me/?text=${mensagemWhatsapp}`, '_blank');
    // Para enviar para um número específico (o número deve ser informado com DDI e DDD, sem sinais):
    // window.open(`https://wa.me/55XXYYYYYYYYY?text=${mensagemWhatsapp}`, '_blank');
});