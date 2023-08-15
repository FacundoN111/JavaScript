
function porcentaje(ingresoAlfajores, salidaAlfajores) {
    const porcentajeStock = salidaAlfajores * 100 / ingresoAlfajores
    const porcentajeFinal = 100 - porcentajeStock
    return porcentajeFinal

};



// entrada de datos
    const variedadAlfajores = parseFloat(prompt('complete la cantidad de marcas de alfajores'));
    const ingresoAlfajores = parseFloat(prompt('ingrese la cantidad de alfajores ingresados'));
    const salidaAlfajores = parseFloat(prompt('ingrese la cantidad de alfajores vendidos'));
    


// procesamiento de los datos (en informacion)
    
    const stock = ingresoAlfajores - salidaAlfajores;
    const porcentajeResultado = porcentaje(ingresoAlfajores, salidaAlfajores);

    let cantidadAlfajores  = 0; 

    for (let cant = 0; cant < variedadAlfajores; cant++) {
      const resp = prompt('Alfajor ' + cant + ' complete si o no, si ingreso'); 
      

      if (resp === 'si') {
        
        cantidadAlfajores++; 
      }

    };


// salida de la informacion

     alert(stock);
     alert(porcentajeResultado + "%");




