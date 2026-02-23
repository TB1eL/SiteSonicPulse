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
}

// Phone mask
document.getElementById("telefone").addEventListener("input", function (e) {
  let v = e.target.value.replace(/\D/g, "").substring(0, 11);
  if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  else if (v.length > 6) v = v.replace(/^(\d{2})(\d{4})(\d*)$/, "($1) $2-$3");
  else if (v.length > 2) v = v.replace(/^(\d{2})(\d*)$/, "($1) $2");
  e.target.value = v;
});

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const tel = document.getElementById("telefone").value.trim();
  const ingresso = document.querySelector('input[name="ingresso"]:checked');

  if (!nome || !email || !tel || !ingresso) {
    // Highlight empty
    [
      document.getElementById("nome"),
      document.getElementById("email"),
      document.getElementById("telefone"),
    ].forEach((f) => {
      if (!f.value.trim()) {
        f.style.borderColor = "#ff3d6e";
        f.focus();
      } else f.style.borderColor = "";
    });
    if (!ingresso) {
      document
        .querySelectorAll(".ticket-label")
        .forEach((l) => (l.style.borderColor = "rgba(255,61,110,0.6)"));
      setTimeout(
        () =>
          document
            .querySelectorAll(".ticket-label")
            .forEach((l) => (l.style.borderColor = "")),
        2000,
      );
    }
    return;
  }

  const btn = document.querySelector(".submit-btn");
  btn.textContent = "PROCESSANDO…";
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById("registrationForm").reset();
    btn.textContent = "✓ INSCRITO COM SUCESSO!";
    btn.style.background = "#00e5ff";
    showToast();
    setTimeout(() => {
      btn.textContent = "CONFIRMAR INSCRIÇÃO →";
      btn.style.background = "";
      btn.disabled = false;
    }, 4000);
  }, 1500);
}

function showToast() {
  const t = document.getElementById("toast");
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 5000);
}

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".media-card, .perk, .form-card, table")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
