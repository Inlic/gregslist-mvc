import { generateId } from "../utils.js";
console.log(0)
export default class Job {
  // Object Destructuring
  constructor({ position, salary, posted, company, img, description }) {
    console.log(2);
    this.id = generateId()
    this.position = position
    this.salary = salary
    this.posted = posted
    this.company = company
    this.img = img
    this.description = description || "no description"
  }

  get Template() {
    return `            
    <div class="col-12">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.company} - ${this.position} - ${this.salary}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
                  <p>Posted: ${this.posted}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}