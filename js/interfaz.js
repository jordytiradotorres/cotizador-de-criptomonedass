class Interfaz {
  constructor () {
    this.init()
  }

  init () {
    this.construirSelect()
  }

  construirSelect () {
    cotizador.obtenerMonedasAPI()
      .then(data => {
        const arregloMonedas = data.monedas
        const select = document.getElementById('criptomoneda')

        arregloMonedas.forEach((moneda) => {
          const option = document.createElement('option')
          option.value = moneda.id
          option.appendChild(document.createTextNode(moneda.name))
          select.appendChild(option)
        })
      })
  }

  mostrarMensaje (mensaje, clases) {
    const div = document.createElement('div')
    div.className = clases
    div.textContent = mensaje

    const mostrarError = document.getElementById('mensaje')
    mostrarError.appendChild(div)
    window.setTimeout(() => {
      document.querySelector('.mensaje div').remove()
    }, 3000)
  } // fin de mostrarMensaje

  mostrarResultado (resultado, moneda) {
    this.muestraSpinner()

    // construir la etiqueta de precio segun la moneda
    const etiquetaMoneda = `price_${moneda}`

    // leer el valor del resultado
    const valor = resultado[etiquetaMoneda]

    const monedaUpper = moneda.toUpperCase()
    const hora = new Date(resultado.last_updated * 1000)
    const horaActualizada = `${hora.getHours()}:${hora.getMinutes()}`

    // construir el template
    let templateHTML = ''
    templateHTML += `
    <div class="container mb-4 bitcoin">
      <div class="card text-white bg-info text-center">
        <div class="card-header text-uppercase">Resultado</div>
        <div class="card-body">
          <p class="card-text">El precio de ${resultado.name} a moneda ${monedaUpper} es de: $ ${valor}</p>
          <p class="card-text">Último hora: ${resultado.percent_change_1h}</p>
          <p class="card-text">Último día: ${resultado.percent_change_24h}</p>
          <p class="card-text">Últimos 7 días: ${resultado.percent_change_7d}</p>
          <p class="">Última actualización ${horaActualizada} horas</p>
        </div>
      </div>
    </div>
    `
    const resultado2 = document.getElementById('resultado')

    window.setTimeout(() => {
      resultado2.innerHTML = templateHTML
      document.querySelector('.spinner').remove()
    }, 2000)
  } // fin de mostrarResultado

  muestraSpinner () {
    // muestra el spinner
    const spinner = document.createElement('img')
    spinner.src = 'img/loader2.gif'
    document.querySelector('.spinner').appendChild(spinner)
  }
}
