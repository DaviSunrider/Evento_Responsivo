AOS.init();

const dataEvento = new Date("May 14, 2024 00:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const tempoRestante = timeStampEvento - timeStampAtual;

  const diasMS = 1000 * 60 * 60 * 24;
  const horasMS = 1000 * 60 * 60;
  const minutosMS = 1000 * 60;

  const contagemDias = Math.floor(tempoRestante / diasMS);
  const contagemHoras = Math.floor((tempoRestante % diasMS) / horasMS);
  const contagemMinutos = Math.floor((tempoRestante % horasMS) / minutosMS);
  const contagemSegundos = Math.floor((tempoRestante % minutosMS) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `${contagemDias}d ${contagemHoras}h ${contagemMinutos}m ${contagemSegundos}s`;

  if (tempoRestante <= 0) {
    clearInterval(contaHoras);
    document.getElementById("contador").innerHTML = "Meu aniversário! 🎉🎉🎉";
  }
}, 1000);
