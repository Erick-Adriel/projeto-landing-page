document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Exibir mensagem de sucesso
    document.getElementById('mensagemSucesso').classList.remove('hidden');
    
    // Limpeza dos campos
    document.getElementById('contatoForm').reset();
});
