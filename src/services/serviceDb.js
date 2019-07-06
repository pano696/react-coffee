export default class ServiceDb {

  constructor() {
    this._baseUrl = 'http://localhost:3000' //for json-server
  }

  getResource = async (url) => {
    const response = await fetch(`${this._baseUrl}${url}`)
    if (!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`);

    return await response.json()
  }

  getGoods = async () => {
    return await this.getResource('/goods/')
  }

  getCoffee = async () => {
    return await this.getResource('/coffee/')
  }

  getBestsellers = async () => {
    return await this.getResource('/bestsellers/')
  }
}
