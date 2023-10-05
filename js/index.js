document.getElementById('formularioEvento').addEventListener('submit', guardarEvento);

function guardarEvento(e) {
  let nombre = document.getElementById('nombre').value;
  let descripcion = document.getElementById('descripcion').value;
  console.log(descripcion)

  let evento = {
    nombre,
    descripcion
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

function eliminarEvento(nombre) {
  console.log(nombre)
  let eventos = JSON.parse(localStorage.getItem('eventos'));
  for (let i = 0; i < eventos.length; i++) {
    if (eventos[i].nombre == nombre) {
      eventos.splice(i, 1);
    }
  }

  localStorage.setItem('eventos', JSON.stringify(eventos));
  listarEventos();
}

function listarEventos() {
  let eventos = JSON.parse(localStorage.getItem('eventos'));
  let eventosVista = document.getElementById('eventos');
  eventosVista.innerHTML = '';
  for (let i = 0; i < eventos.length; i++) {
    let nombre = eventos[i].nombre;
    let descripcion = eventos[i].descripcion;

    eventosVista.innerHTML += `<div class="card mb-3">
<div class="card-body">
<p>${nombre} - ${descripcion}
<a href="#" onclick="eliminarEvento('${nombre}')" class="btn btn-danger ml-5">Eliminar</a>
</p>
</div>
</div>`;
  }
}

listarEventos();
