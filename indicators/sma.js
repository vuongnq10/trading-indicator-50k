const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const sma = async (smaLength, sourceType, ex, ticker, interval, isFuture = false) => {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let smaInput = {
        values: source[sourceType],
        period: smaLength
    }
    return await indicators.SMA.calculate(smaInput)
}
module.exports = sma
