import { generateId } from "../utils.js";
console.log(0)
export default class House {
  // Object Destructuring
  constructor({ beds, baths, yearbuilt, price, img, description }) {
    console.log(2);
    this.id = generateId()
    this.beds = beds
    this.baths = baths
    this.yearbuilt = yearbuilt
    this.price = price
    this.img = img
    this.description = description || "no description"
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.beds} Beds - ${this.baths} Baths - Built: ${this.yearbuilt}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.housesController.bid('${this.id}')">+ $1000</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}