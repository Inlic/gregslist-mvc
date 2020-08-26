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
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.company} - ${this.position} - Salary: ${this.salary}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
                  <p>Posted: ${this.posted}</p>
              </div>
          </div>
      </div>
    </div>`
  }
  get formTemplate(){
    return `<div class="row my-3">
    <div class="col">
        <form onsubmit="app.jobsController.createJob()" class="form-inline">
            <div class="form-group p-1">
                <label class="mr-1" for="position">Position</label>
                <input type="text" name="position" id="position" class="form-control" placeholder="Position...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="salary">Salary</label>
                <input type="text" name="salary" id="salary" class="form-control" placeholder="Salary...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="posted">Posted</label>
                <input type="text" name="posted" id="posted" class="form-control" placeholder="Posted...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="company">Company</label>
                <input type="text" name="company" id="company" class="form-control" placeholder="Company...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="jobdescription">Description</label>
                <input type="text" name="jobdescription" id="jobdescription" class="form-control"
                    placeholder="Description...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="jobimg">Image Url</label>
                <input type="url" name="jobimg" id="jobimg" class="form-control" placeholder="Image Url...">
            </div>
            <button type="submit" class="btn btn-outline-success">Add Job</button>
        </form>
    </div>
</div>
    `
  }
}