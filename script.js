const lampada = document.getElementById("lampada");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

let luzAcesa = false;

botao.addEventListener("click", function () {
  if (luzAcesa) {
    lampada.classList.remove("acendida");
    lampada.classList.add("apagada");
    mensagem.textContent = "A luz está apagada.";
    botao.textContent = "Acender luz";
    luzAcesa = false;
  } else {
    lampada.classList.remove("apagada");
    lampada.classList.add("acendida");
    mensagem.textContent = "A luz está acesa!";
    botao.textContent = "Apagar luz";
    luzAcesa = true;
  }
});
