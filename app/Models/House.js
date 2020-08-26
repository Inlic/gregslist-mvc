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
  get formTemplate(){
    return `<div class="row my-3">
    <div class="col">
        <form onsubmit="app.housesController.createHouse()" class="form-inline">
            <div class="form-group p-1">
                <label class="mr-1" for="beds">Beds</label>
                <input type="text" name="beds" id="beds" class="form-control" placeholder="Beds">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="baths">Baths</label>
                <input type="text" name="baths" id="baths" class="form-control" placeholder="Baths">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="yearbuilt">Year</label>
                <input type="number" name="yearbuilt" id="yearbuilt" class="form-control" placeholder="Year built" min="1900"
                    max="2021">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="houseprice">Price</label>
                <input type="number" name="houseprice" id="houseprice" class="form-control" placeholder="Price...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="housedescription">Description</label>
                <input type="text" name="housedescription" id="housedescription" class="form-control"
                    placeholder="Description...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="houseimg">Image Url</label>
                <input type="url" name="houseimg" id="houseimg" class="form-control" placeholder="Image Url...">
            </div>
            <button type="submit" class="btn btn-outline-success">Add House</button>
        </form>
    </div>
</div>
    `
  }
}