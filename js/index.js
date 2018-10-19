const cotizador = new Cotizador()
const ui = new Interfaz()

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', e => {
  e.preventDefault()

  const moneda = document.getElementById('moneda')
  const monedaSeleccionada = moneda.options[moneda.selectedIndex].value

  const criptomoneda = document.getElementById('criptomoneda')
  const criptomonedaSeleccionada = criptomoneda.options[criptomoneda.selectedIndex].value

  if (monedaSeleccionada === '' || criptomonedaSeleccionada === '') {
    ui.mostrarMensaje('Ambos campos son obligatorios', 'border border-danger bg-danger py-2 mb-2 text-center text-white')
  } else {
    cotizador.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada)
      .then(data => {
        ui.mostrarResultado(data.resultado[0], monedaSeleccionada.toLowerCase())
      })
  }
})
