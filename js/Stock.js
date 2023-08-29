class Producto {
  constructor(nombre, cantidad, salida) {
    this.nombre = nombre
    this.cantidad = cantidad
    this.salida = salida
    }
  }



  function pedirProducto() {
    const nombre = prompt('ingrese la marca del alfajor')
    const cantidad = parseFloat(prompt('ingrese la cantidad de alfajores ingresados'))
    const salida = parseFloat(prompt('ingrese la cantidad de alfajores vendidos')) 
    
    return new Producto(nombre, cantidad, salida)
  }



  const productos = []
  
  let ingresarOtraMarca = true
  while (ingresarOtraMarca) {
    const prod = pedirProducto()
  
    productos.push(prod)
  
    const resp = prompt('quieres agregar otra marca? si/no')
    if (resp === 'no') {
      ingresarOtraMarca = false
    }
  }


  let stock = 0
  const ingresados = productos.map(p => p.cantidad)
  ingresados.forEach(p => { stock = stock + p })
  const vendidos = productos.map(p => p.salida)
  vendidos.forEach(p => { stock = stock - p })
  
  alert(stock + '  Unid. de Stock general')



  


  


  




