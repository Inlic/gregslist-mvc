import housesService from "../Services/HousesService.js";
import STORE from "../store.js";
import House from "../Models/House.js";
console.log(3)
// private
function _drawHouses() {
  console.log(6)
  let houses = STORE.State.houses
  let template = new House({ beds: "", baths: "", yearbuilt: 1, price: 1, img: "", description: "" }).formTemplate
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  houses.forEach(h => template += h.Template)
  document.getElementById('houses').innerHTML = template
}


//Public
export default class HousesController {
  constructor() {
    console.log(5)
    _drawHouses();
  }

  createHouse() {
    event.preventDefault();
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      beds: form.beds.value,
      // @ts-ignore
      baths: form.baths.value,
      // @ts-ignore
      yearbuilt: form.yearbuilt.value,
      // @ts-ignore
      price: parseInt(form.houseprice.value),
      // @ts-ignore
      description: form.housedescription.value,
      // @ts-ignore
      img: form.houseimg.value
    }
    housesService.createHouse(rawHouse)
    _drawHouses();
  }

  removeHouse(id) {
    console.log('house', id)
    housesService.removeHouse(id);
    _drawHouses();
  }

  bid(id) {
    housesService.bid(id);
    _drawHouses();
  }
}