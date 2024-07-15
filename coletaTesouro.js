// Entrada de dados
const totalSalas = parseInt(gets());

// Arrays que indicam em quais salas há tesouros e monstros
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

// Variável para armazenar as mensagens a serem impressas
let mensagens = [];

// Percorre cada sala da masmorra
for (let sala = 1; sala <= totalSalas; sala++) {
    // Verifica se há tesouro e monstro na sala atual
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

    // Monta a mensagem conforme o conteúdo da sala
    if (temTesouro) {
        mensagens.push("Tesouro na sala " + sala + "!");
    }
    if (temMonstro) {
        mensagens.push("Monstro na sala " + sala + "!");
    }
}

// Imprime todas as mensagens coletadas
mensagens.forEach(msg => print(msg));
