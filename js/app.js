// let egresos = {Renta: 900, Ropa: 400};

// let ingresos = {Quincena:9000, Venta: 400};

let egresos = [900, 400];

let ingresos = [9000,400];

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
        totalIngreso += ingreso;
    }
    return totalIngreso;
}

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso +=  egreso;
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

