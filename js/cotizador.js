class Cotizador {
  // obtiene todo el JSON con las criptomonedas
  async obtenerMonedasAPI () {
    // fetch ala API
    const urlObtenerMonedas = await fetch('https://api.coinmarketcap.com/v1/ticker/')

    // respuesta en JSON de las monedas
    const monedas = await urlObtenerMonedas.json()

    return {
      monedas
    }
  } // fin de obtenerMonedasAPI

  async obtenerValores (moneda, criptomoneda) {
    // convierte los select en la url
    const urlConvertir = await fetch(`https://api.coinmarketcap.com/v1/ticker/${criptomoneda}/?convert=${moneda}`)

    const resultado = await urlConvertir.json()

    return {
      resultado
    }
  }// fin de obtenerValores
} // fin de Cotizador
