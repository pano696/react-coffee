export default class ServiceDb {

  constructor() {
    // this._baseUrl = 'http://localhost:3000' //for json-server
    // this._baseUrl = 'http://localhost' //for local hosting
    this._baseUrl = 'https://react-coffee.pano696.ru' //for my hosting
  }

  getResource = async (url) => {
    const response = await fetch(`${this._baseUrl}${url}`)
    if (!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`);

    return await response.json()
  }

  getGoods = async () => {
    // return await this.getResource('/goods/') //for json-server
    const answer =  await this.getResource('/goods.php') //for my hosting
    return answer;
  }

  getCoffee = async () => {
    // return await this.getResource('/coffee/') //for json-server
    const answer =  await this.getResource('/coffee.php') //for my hosting
    return answer;
  }

  getBestsellers = async () => {

    // return await this.getResource('/bestsellers/') //for json-server
    const answer =  await this.getResource('/bestsellers.php') //for my hosting
    return answer;
  }

  getItem = async (name) => {
    // const response = await this.getResource('/coffee/') //for json-server
    const response =  await this.getResource('/coffee.php') //for my hosting
    const index = response.findIndex(item => item.name === name);
    return response[index];
  }

  getGood = async (name) => {
    // const response = await this.getResource('/coffee/') //for json-server
    const response =  await this.getResource('/goods.php') //for my hosting
    const index = response.findIndex(item => item.name === name);
    return response[index];
  }
}
