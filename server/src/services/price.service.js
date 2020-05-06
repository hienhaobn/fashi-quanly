const PriceRepository = require('../repository/price.repository');

module.exports = {
  'getPricesService': async () => {
    let dataPrices = await PriceRepository.getPricesRepository();
    if(dataPrices) {
      return dataPrices;
    }
    return "Error get data form repository";
  },
  'postPriceService': async (body) => {
    if(body) {
      let dataPrice = await PriceRepository.createPriceRepository(body);
      if(dataPrice) {
        return dataPrice
      }
      return "Error post dat to collection price";
    }
    return "Error get data body from client"
  }
}