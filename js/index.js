document.getElementById('formularioEvento').addEventListener('submit', guardarEvento);

function guardarEvento(e) {
  let nombre = document.getElementById('nombre').value;
  let fecha = document.getElementById('fecha').value;

  let evento = {
    nombre,
    fecha
  };

  if (localStorage.getItem('eventos') === null) {
    let eventos = [];
    eventos.push(evento);
    localStorage.setItem('eventos', JSON.stringify(eventos));
  } else {
    let eventos = JSON.parse(localStorage.getItem('eventos'));
    eventos.push(evento);
    localStorage.setItem('eventos', JSON.stringify(eventos));
  }

  listarEventos();
  document.getElementById('formularioEvento').reset();
  e.preventDefault();
}

function listarEventos() {
  let eventos = JSON.parse(localStorage.getItem('eventos'));
  let eventosVista = document.getElementById('eventos');
  eventosVista.innerHTML = '';
  for (let i = 0; i < eventos.length; i++) {
    let nombre = eventos[i].nombre;
    let fecha = eventos[i].fecha;

    eventosVista.innerHTML += `<div class="card my-3 mt-lg-0">
<div class="card-body">
<p>${nombre} - ${fecha}
</p>
</div>
</div>`;
  }
}

listarEventos();
