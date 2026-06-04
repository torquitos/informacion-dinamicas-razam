/* =============================================
   DINAMICAS RAZAM — script.js
   ============================================= */

// === Reveal on Scroll ===
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      var target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === PANEL ADMIN - Resultado Astro Luna ===

// Cargar resultado guardado al abrir la pagina
function cargarResultado() {
  var datos = localStorage.getItem('resultadoAstroLuna');
  if (datos) {
    var resultado = JSON.parse(datos);
    var digitos = document.querySelectorAll('.digito-resultado');
    var numero = resultado.numero.padStart(4, '0');
    for (var i = 0; i < digitos.length; i++) {
      digitos[i].textContent = numero[i];
    }
    var fecha = document.getElementById('fecha-resultado');
    if (fecha) fecha.textContent = resultado.fecha;
  }
}

// Guardar resultado desde el panel admin
function guardarResultado() {
  var numero = document.getElementById('admin-numero').value.trim();
  var fecha = document.getElementById('admin-fecha').value.trim();

  if (numero.length !== 4 || isNaN(numero)) {
    alert('El numero debe tener exactamente 4 digitos. Ejemplo: 6364');
    return;
  }
  if (!fecha) {
    alert('Por favor ingresa la fecha.');
    return;
  }

  var fechaFormateada = new Date(fecha + 'T00:00:00').toLocaleDateString('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  localStorage.setItem('resultadoAstroLuna', JSON.stringify({
    numero: numero,
    fecha: fechaFormateada
  }));

  cargarResultado();
  document.getElementById('admin-panel').style.display = 'none';
  alert('Resultado actualizado correctamente!');
}

// Mostrar panel admin si la URL termina en #admin
function verificarAdmin() {
  if (window.location.hash === '#admin') {
    document.getElementById('admin-panel').style.display = 'flex';
  }
}

window.addEventListener('hashchange', verificarAdmin);
window.addEventListener('load', function() {
  cargarResultado();
  verificarAdmin();
});

// Guardar con Enter
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && document.getElementById('admin-panel').style.display !== 'none') {
    guardarResultado();
  }
});