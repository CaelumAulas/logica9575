/* função que deixa o numero informado sempre com 2 dígitos preenchendo com 0 caso necessário. 
   Ex: 17 = 17, 9 = 09 */
   function numeroComDoisDigitos(numero) {
    return numero.toString().padStart(2,0);
}

/* função que deixa o número sempre com 4 dígitos preenchendo com 0 caso necessário */
function numeroComQuatroDigitos(numero) {
    return numero.toString().padStart(4,0);
}

/* obtém o ano atual configurado na máquina do usuário */
function pegaAnoAtual() {
    return new Date().getFullYear().toString();
}

/* obtém o mês atual configurado na máquina do usuário */
function pegaMesAtual() {
    return numeroComDoisDigitos(new Date().getMonth()+1);
}

/* obtem o dia atual configurado na máquina do usuário */
function pegaDiaAtual() {
    return numeroComDoisDigitos(new Date().getDate());
}

/* Calcula a idade exata com base nas informações de dia, mes e ano */
function calculaIdade(dia, mes, ano) {
    // obtem o ano, mês e dia atuais
    var anoAtual = pegaAnoAtual();
    var mesAtual = pegaMesAtual();
    var diaAtual = pegaDiaAtual();

    /* converte os dados de dia, mês e ano enviados por parâmetros
       para o padrão com 2 ou 4 dígitos */
    ano = numeroComQuatroDigitos(ano);
    mes = numeroComDoisDigitos(mes);
    dia = numeroComDoisDigitos(dia);
    
    /* Concatena as informações de ano, mes e dia da data atual
       e também da data de nascimento fornecida */
    var dataAtualConcatenada = anoAtual + mesAtual + diaAtual;
    var anoNascimentoConcatenado = ano + mes + dia;

    // realiza o cálculo da idade com base nas datas
    var idadeQuebrada = (dataAtualConcatenada - anoNascimentoConcatenado) / 10000;

    // retorna o valor inteiro encontrado
    return parseInt(idadeQuebrada);
}