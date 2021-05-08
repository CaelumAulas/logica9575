/* função que permite escrever do document vários blocos de texto (um embaixo do outro)
   sem limpar a tela inteira */
function mostra(mensagem) {
    // cria um elemento <div>
    var bloco = document.createElement('div');
    // insere no elemento <div> a mensagem que passamos via parâmetro
    bloco.innerHTML = mensagem;
    // adiciona no final do corpo do documento o bloco <div> criado
    document.body.appendChild(bloco);
}