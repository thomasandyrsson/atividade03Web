//Botão Cumprimentar
function Cumprimentar(){ // Nome da função
    let nome = document.getElementById("nome").value; // Cria uma variável chamada nome e puxa o valor

    if(nome === ""){ // A fórmula verifica se nome é vazio
        alert("Campo inválido, digite um nome"); // Se vazio, cria um alerta de campo inválido
    }else{
        alert(`Olá ${nome}! Seja bem-vindo(a)`) // Se tiver uma variável ou constante, retorna a mensagem
    }
}

// Botão Contador de Letras
function ContarLetras(){
    let nome = document.getElementById("nome").value; // Captura a palavra e salva na constante
    let j = 0
    for (i = 0; i < nome.length; i++){ // Aqui decidi usar o laço for para percorrer a palavra
        j++ // Criei a nova variável que vai salvar a quantidade de letras contadas
    }
        
    if(j > 5){
        alert("Seu nome tem mais de 5 letras")
    }else{
        alert("Seu nome tem menos que 5 letras")
    }
    return j // Ao terminar o laço ele retorna o valor de j
}
