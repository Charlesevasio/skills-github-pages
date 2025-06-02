// Adicione um novo botão no index.html: <button id="enviar-email" style="display: none;">Enviar por E-mail</button>

    const enviarEmailBtn = document.getElementById('enviar-email');

    // Dentro do `gerarCartaoBtn.addEventListener` ou em uma nova função:
    gerarCartaoBtn.addEventListener('click', () => {
        // ... (código existente para gerar o cartão) ...
        baixarCartaoBtn.style.display = 'block'; // Já existente
        enviarWhatsappBtn.style.display = 'block'; // Já adicionado
        enviarEmailBtn.style.display = 'block'; // Mostrar o botão do E-mail
    });

    enviarEmailBtn.addEventListener('click', () => {
        const remetente = remetenteInput.value || 'Um Admirador Secreto';
        const destinatario = destinatarioInput.value || 'Alguém Especial';
        let mensagem = mensagemProntaSelect.value;
        if (mensagemPersonalizadaTextarea.value !== "") {
            mensagem = mensagemPersonalizadaTextarea.value;
        } else if (mensagem === "") {
            mensagem = "Você é incrível! Com muito carinho.";
        }

        const assunto = encodeURIComponent(`Um Cartão de Afeto Especial para Você!`);
        const corpoEmail = encodeURIComponent(`Olá ${destinatario},\n\nReceba este cartão especial de ${remetente}:\n\n"${mensagem}"\n\nEspero que goste!\n\n(Lembre-se de anexar a imagem do cartão que você baixou!)`);

        // Abre o cliente de e-mail padrão do usuário
        window.open(`mailto:?subject=${assunto}&body=${corpoEmail}`, '_blank');
    });