
let computadoras = [];

function ingresarComputadora() {
    let nombreCliente = prompt("Ingrese el nombre del cliente:");
    let contraseñaWindows = prompt("Ingrese la contraseña para iniciar Windows:");
    let tarea = prompt("¿Qué se necesita hacer en la computadora?");
    let presupuesto = parseFloat(prompt("Ingrese el presupuesto para el cliente:"));
    let precioComponentes = parseFloat(prompt("Ingrese el precio de los componentes:"));

    let computadora = {
        nombreCliente: nombreCliente,
        contraseñaWindows: contraseñaWindows,
        tarea: tarea,
        presupuesto: presupuesto,
        precioComponentes: precioComponentes
    };

    computadoras.push(computadora);
}

function calcularGanancias() {
    let gananciasTotales = 0;
    for (let i = 0; i < computadoras.length; i++) {
        gananciasTotales += computadoras[i].presupuesto - computadoras[i].precioComponentes;
    }
    return gananciasTotales;
}

function mostrarInformacionComputadoras() {
    console.log("Información de las computadoras:");
    computadoras.forEach(function(computadora, index) {
        console.log("Computadora " + (index + 1) + ":");
        console.log("Nombre del cliente: " + computadora.nombreCliente);
        console.log("Contraseña para iniciar Windows: " + computadora.contraseñaWindows);
        console.log("Tarea a realizar: " + computadora.tarea);
        console.log("Presupuesto para el cliente: $" + computadora.presupuesto.toFixed(2));
        console.log("Precio de los componentes: $" + computadora.precioComponentes.toFixed(2));
        console.log("------------------------");
    });
}

function main() {
    let continuar = true;
    while (continuar) {
        ingresarComputadora();
        let opcion = prompt("¿Desea ingresar otra computadora? (S/N)").toUpperCase();
        if (opcion !== 'S') {
            continuar = false;
        }
    }

    mostrarInformacionComputadoras();

    let ganancias = calcularGanancias();
    console.log("Ganancias totales: $" + ganancias.toFixed(2));
}

main();
