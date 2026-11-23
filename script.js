const lampada = document.getElementById("lampada");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

let luzAcesa = false;

botao.addEventListener("click", function () {

  if (luzAcesa) {
    lampada.classList.remove("acendida");
    lampada.classList.add("apagada");

    document.body.classList.remove("iluminado");

    mensagem.textContent = "A galeria está com as luzes apagadas.";
    botao.textContent = "Iluminar galeria";

    luzAcesa = false;

  } else {

    lampada.classList.remove("apagada");
    lampada.classList.add("acendida");

    document.body.classList.add("iluminado");

    mensagem.textContent = "A exposição está iluminada!";
    botao.textContent = "Apagar iluminação";

    luzAcesa = true;
  }
});
