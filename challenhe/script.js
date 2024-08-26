// Seleciona os elementos de input e output
const textArea = document.querySelector('.text-area');
const messageArea = document.querySelector('.message');

// Seleciona os botões
const btnEncrypt = document.querySelector('.btn-encriptar');
const btnDecrypt = document.querySelector('.btn-desencriptar');
const btnCopy = document.querySelector('.btn-copiar');

// Função para criptografar o texto
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}

// Função para descriptografar o texto
function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}

// Função para copiar o texto para a área de transferência
function copyText() {
    messageArea.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

// Evento para o botão de criptografar
btnEncrypt.addEventListener('click', () => {
    const inputText = textArea.value;
    const encryptedText = encryptText(inputText);
    messageArea.value = encryptedText;
});

// Evento para o botão de descriptografar
btnDecrypt.addEventListener('click', () => {
    const inputText = textArea.value;
    const decryptedText = decryptText(inputText);
    messageArea.value = decryptedText;
});

// Evento para o botão de copiar
btnCopy.addEventListener('click', copyText);
