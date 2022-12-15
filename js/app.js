const ingresos = [
    new Ingreso('Salario',20000),
    new Ingreso('Venta coche',50000)
];
const egresos = [
    new Egreso('Renta',4000),
    new Egreso('Ropa',800)
];

// let egresos = [900, 400];
// let ingresos = [9000,400];

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(totalIngresos());
    console.log(totalEgresos());
}

const totalIngresos = () => {
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso +=  egreso.valor;
    }
    return totalEgreso;
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX',{style:"currency", currency:"MXN"});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX',{style:"percent",maximumFractionDigits:"2"});
}

console.log(cargarCabecero());

