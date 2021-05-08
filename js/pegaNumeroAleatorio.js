/* Função que retorna um número aleatório entre min e max */
function pegaNumeroAleatorio(min, max)
{
    // sorteia e retorna um número entre min e max 
    var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
}