function abrirFormulario(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.style.display = 'block';
}

function cerrarFormulario(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.style.display = 'none';
}

function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  if (!menu) return;
  menu.classList.toggle('open');
}

function abrirCerrarFormulario(formId, accion) {
  if (accion === 'abrir') {
    abrirFormulario(formId);
  } else if (accion === 'cerrar') {
    cerrarFormulario(formId);
  }
}
function leerTexto(){
    let texto = document.querySelector(".card").innerText;
    let voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "es-ES";
    speechSynthesis.speak(voz);
}
function detenerAudio(){
    speechSynthesis.cancel();
}