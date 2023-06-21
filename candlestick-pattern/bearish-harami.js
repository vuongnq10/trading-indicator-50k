const { bearishharami } = require('technicalindicators')
const getOHLCV = require('../indicators/ohlcv.js')
const detachSource = require('../indicators/source.js')

const isBearishHaramiPattern = async (ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let singleInput = {
      open: source['open'].slice(-3, -1),
      high: source['high'].slice(-3, -1),
      low: source['low'].slice(-3, -1),
      close: source['close'].slice(-3, -1),
    }
    return bearishharami(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isBearishHaramiPattern,
}