///////          Sistema de stock de mercaderia          ///////


// Variables de html

const formStock = document.querySelector('#formStock')
const inputProducto1 = document.querySelector('#inputProducto1')
const inputProducto2 = document.querySelector('#inputProducto2')
const inputProducto3 = document.querySelector('#inputProducto3')
const inputProducto4 = document.querySelector('#inputProducto4')
const inputCantidadLocal1 = document.querySelector('#inputCantidadLocal1')
const inputCantidadLocal2 = document.querySelector('#inputCantidadLocal2')
const inputCantidadLocal3 = document.querySelector('#inputCantidadLocal3')
const inputCantidadLocal4 = document.querySelector('#inputCantidadLocal4')
const inputCantidadIngresada1 = document.querySelector('#inputCantidadIngresada1')
const inputCantidadIngresada2 = document.querySelector('#inputCantidadIngresada2')
const inputCantidadIngresada3 = document.querySelector('#inputCantidadIngresada3')
const inputCantidadIngresada4 = document.querySelector('#inputCantidadIngresada4')
const divlistaProductos = document.querySelector('#listaProductos')
const divlistaLocal = document.querySelector('#listaLocal')
const divListaIngresados = document.querySelector('#listaIngresados')
const seccionProductos = document.querySelector('#seccionProductos')
const seccionLocal = document.querySelector('#seccionLocal')
const seccionIngresado = document.querySelector('#seccionIngresado')
 

// Creando constante de stock con JSON para los datos guardados o el array vacio en caso contrario

const stock = JSON.parse(localStorage.getItem('stock')) || []
mostrarProductos()
mostrarCantidadEnLocal()
mostrarIngresados()


// Se crea la clase producto 

class Producto {
  constructor({ producto1, producto2, producto3, producto4, cantidadLocal1, cantidadLocal2, cantidadLocal3, cantidadLocal4, productoIngresado1, productoIngresado2, productoIngresado3, productoIngresado4 }) {

    this.producto1 = producto1
    this.producto2 = producto2
    this.producto3 = producto3
    this.producto4 = producto4
    this.cantidadLocal1 = cantidadLocal1
    this.cantidadLocal2 = cantidadLocal2
    this.cantidadLocal3 = cantidadLocal3
    this.cantidadLocal4 = cantidadLocal4
    this.productoIngresado1 = productoIngresado1
    this.productoIngresado2 = productoIngresado2
    this.productoIngresado3 = productoIngresado3
    this.productoIngresado4 = productoIngresado4
  }
}


// Se crea eventos para el submit

formStock.onsubmit = e => {
  e.preventDefault()

  const producto1 = inputProducto1.value
  const producto2 = inputProducto2.value
  const producto3 = inputProducto3.value
  const producto4 = inputProducto4.value
  const cantidadLocal1 = inputCantidadLocal1.value
  const cantidadLocal2 = inputCantidadLocal2.value
  const cantidadLocal3 = inputCantidadLocal3.value
  const cantidadLocal4 = inputCantidadLocal4.value
  const productoIngresado1 = inputCantidadIngresada1.value 
  const productoIngresado2 = inputCantidadIngresada2.value
  const productoIngresado3 = inputCantidadIngresada3.value
  const productoIngresado4 = inputCantidadIngresada4.value

  const producto = new Producto({ producto1, producto2, producto3, producto4, cantidadLocal1, cantidadLocal2, cantidadLocal3, cantidadLocal4, productoIngresado1, productoIngresado2, productoIngresado3, productoIngresado4 })
  

  guardarProducto(producto)
}


// Se crea la funcion para guardar cada producto con sus cantidades ingresadas

function guardarProducto(producto) {
  stock.push(producto)
  localStorage.setItem('stock', JSON.stringify(stock))
  mostrarProductos()
  mostrarCantidadEnLocal()
  mostrarIngresados()
}


// Se crea la funcion para mostrar cada producto en pantalla despues enviar el formulario

function mostrarProductos() {
  if (stock.length > 0) {
    seccionProductos.style.display = 'block'
    let listaProductosHtml = '<ul>'

    for (const producto of stock) {
      listaProductosHtml += `<li><a onclick="hacerAlgoConProductos('${producto.producto1}')">${producto.producto1}</a></li>`
    }
    for (const producto of stock) {
      listaProductosHtml += `<li><a onclick="hacerAlgoConProductos('${producto.producto2}')">${producto.producto2}</a></li>`
    }

    for (const producto of stock) {
      listaProductosHtml += `<li><a onclick="hacerAlgoConProductos('${producto.producto3}')">${producto.producto3}</a></li>`
    }

    for (const producto of stock) {
      listaProductosHtml += `<li><a onclick="hacerAlgoConProductos('${producto.producto4}')">${producto.producto4}</a></li>`
    }


    divlistaProductos.innerHTML = listaProductosHtml + '</ul>'
  }
}

function mostrarCantidadEnLocal() {
  if (stock.length > 0) {
    seccionLocal.style.display = 'block'
    let listaLocalHtml = '<ul>'

    for (const producto of stock) {
      listaLocalHtml += `<li><a onclick="hacerAlgoConLocal('${producto.cantidadLocal1}')">${producto.cantidadLocal1}</a></li>`
    }

    for (const producto of stock) {
      listaLocalHtml += `<li><a onclick="hacerAlgoConLocal('${producto.cantidadLocal2}')">${producto.cantidadLocal2}</a></li>`
    }

    for (const producto of stock) {
      listaLocalHtml += `<li><a onclick="hacerAlgoConLocal('${producto.cantidadLocal3}')">${producto.cantidadLocal3}</a></li>`
    }

    for (const producto of stock) {
      listaLocalHtml += `<li><a onclick="hacerAlgoConLocal('${producto.cantidadLocal4}')">${producto.cantidadLocal4}</a></li>`
    }


    divlistaLocal.innerHTML = listaLocalHtml + '</ul>'
  }
}

function mostrarIngresados() {
  if (stock.length > 0) {
    seccionIngresado.style.display = 'block'
    let listaIngresadosHtml = '<ul>'

    for (const producto of stock) {
      listaIngresadosHtml += `<li><a onclick="hacerAlgoConIngresados('${producto.productoIngresado1}')">${producto.productoIngresado1}</a></li>`
    }

    for (const producto of stock) {
      listaIngresadosHtml += `<li><a onclick="hacerAlgoConIngresados('${producto.productoIngresado2}')">${producto.productoIngresado2}</a></li>`
    }

    for (const producto of stock) {
      listaIngresadosHtml += `<li><a onclick="hacerAlgoConIngresados('${producto.productoIngresado3}')">${producto.productoIngresado3}</a></li>`
    }

    for (const producto of stock) {
      listaIngresadosHtml += `<li><a onclick="hacerAlgoConIngresados('${producto.productoIngresado4}')">${producto.productoIngresado4}</a></li>`
    }


    divListaIngresados.innerHTML = listaIngresadosHtml + '</ul>'
  }
}

function hacerAlgoConProductos(nombreProductos) {
  alert(nombreProductos)
}

function hacerAlgoConLocal(nombreLocal) {
  alert(nombreLocal)
}

function hacerAlgoConIngresados(nombreproductoIngresado) {
  alert(nombreproductoIngresado)
}