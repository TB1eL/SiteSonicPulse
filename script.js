<<<<<<< HEAD
// SIMPLES TABS DE PROGRAMAÇÃO (se quiser manter 3 dias, mas deixei só um resumo)
// Caso queira adicionar mais dias, é fácil. Mas preferi simplificar ao máximo.

// PLAYER MP3 SIMPLES
const tracks = [
  { name: "LUNA NOIR - Neon", file: "audio3.mp3" },
  { name: "VOLTAGEM - Voltage", file: "audio2.mp3" },
  { name: "SOLARIS - Orbit", file: "audio1.mp3" },
];
let current = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playPause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const trackName = document.getElementById("trackName");
const progress = document.getElementById("progress");

function loadTrack(index) {
  current = (index + tracks.length) % tracks.length;
  trackName.innerText = tracks[current].name;
  audio.src = tracks[current].file; // vazio = simulação
  progress.value = 0;
=======
// Toggle menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Tab switching
function showDay(btn, id) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  ["dia1", "dia2", "dia3"].forEach((d) => {
    document.getElementById(d).style.display = d === id ? "block" : "none";
  });
>>>>>>> 5d23e19916ac58429c0cfef93bdb06bb50eee0ad
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch(() => {}); // simulação
    playBtn.innerText = "⏸";
  } else {
    audio.pause();
    playBtn.innerText = "▶";
  }
});

prevBtn.addEventListener("click", () => loadTrack(current - 1));
nextBtn.addEventListener("click", () => loadTrack(current + 1));

audio.addEventListener("ended", () => nextBtn.click());
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});
progress.addEventListener("input", (e) => {
  if (audio.duration) {
    audio.currentTime = (e.target.value / 100) * audio.duration;
  }
});

loadTrack(0);

// FORMULÁRIO SIMPLES
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  document.querySelectorAll(".error").forEach((el) => (el.innerText = ""));

  const nome = document.getElementById("nome");
  if (nome.value.trim().length < 2) {
    document.getElementById("nomeError").innerText = "Digite um nome válido";
    ok = false;
  }

  const email = document.getElementById("email");
  if (!email.value.includes("@") || !email.value.includes(".")) {
    document.getElementById("emailError").innerText = "E-mail inválido";
    ok = false;
  }

  const tel = document.getElementById("tel");
  if (tel.value.replace(/\D/g, "").length < 10) {
    document.getElementById("telError").innerText = "Telefone incompleto";
    ok = false;
  }

  const ticket = document.querySelector('input[name="ingresso"]:checked');
  if (!ticket) {
    document.getElementById("ticketError").innerText = "Selecione um ingresso";
    ok = false;
  }

  if (ok) {
    document.getElementById("successMsg").style.display = "block";
    form.reset();
    setTimeout(
      () => (document.getElementById("successMsg").style.display = "none"),
      3000,
    );
  }
});
