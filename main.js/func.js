
function gerarNumero() {
    const min = 1;
    const max = 20;
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('resultado').innerText = numeroAleatorio;
    const audio = document.getElementById('som');
    audio.currentTime = 0; 
    audio.play();
    
}
