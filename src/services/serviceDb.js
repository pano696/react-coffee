export default class ServiceDb {

  constructor() {
    this._baseUrl = 'http://localhost:3000' //for json-server
    // this._baseUrl = 'https://react-coffee.pano696.ru' //for my hosting
  }

  getResource = async (url) => {
    const response = await fetch(`${this._baseUrl}${url}`)
    if (!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`);

    return await response.json()
  }

  getGoods = async () => {
    return await this.getResource('/goods/')
    // const answer =  await this.getResource('/goods.php')
    //                             .then(resp => resp.json())
    // return answer;
  }

  getCoffee = async () => {
    return await this.getResource('/coffee/')
    // const answer =  await this.getResource('/coffee.php')
    //                     .then(resp => resp.json())
    // return answer;
  }

  getBestsellers = async () => {
    return await this.getResource('/bestsellers/')
    // const answer =  await this.getResource('/bestsellers.php')
    //                   .then(resp => resp.json())
    // return answer;
  }

  getItem = async (name) => {
    const response = await this.getResource('/coffee/')
                                  // .then(resp => resp.json())
    const index = response.findIndex(item => item.name === name);
    return response[index];
  }
}
