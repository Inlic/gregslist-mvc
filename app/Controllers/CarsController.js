import carsService from "../Services/CarsService.js";
import STORE from "../store.js";
import Car from "../Models/Car.js";
console.log(3)
// private
function _drawCars() {
  console.log(6)
  let cars = STORE.State.cars
  //instantiate a new dummy car to grab the form template from our getter and add it to the top before the loop
  let template = new Car({ make: "", model: "", year: 1, price: 1, img: "", description: "" }).formTemplate
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  cars.forEach(c => template += c.Template)
  document.getElementById('cars').innerHTML = template
}


//Public
export default class CarsController {
  constructor() {
    console.log(5)
    _drawCars();
  }

  createCar() {
    event.preventDefault();
    let form = event.target
    let rawCar = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: parseInt(form.carprice.value),
      // @ts-ignore
      description: form.cardescription.value,
      // @ts-ignore
      img: form.carimg.value
    }
    carsService.createCar(rawCar)
    _drawCars();
  }

  removeCar(id) {
    console.log('hornk', id)
    carsService.removeCar(id);
    _drawCars();
  }

  bid(id) {
    carsService.bid(id);
    _drawCars();
  }
}
