//Obtenemos una fecha
const date = new Date();
console.log('La fecha es:', date);

// Obtengo el elemento contenedor
const container = document.getElementById('task-container');
//console.log('elemento HTML: ', container);

//imprimo la fecha en el contenedor
console.log('<p>' + date  + '</p>');
container.innerHTML = '<p>' + date  + '</p>' ;
