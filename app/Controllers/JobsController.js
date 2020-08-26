import jobsService from "../Services/JobsService.js";
import STORE from "../store.js";
console.log(3)
// private
function _drawJobs() {
  console.log(6)
  let jobs = STORE.State.jobs
  let template = ''
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  jobs.forEach(j => template += j.Template)
  document.getElementById('jobs').innerHTML = template
}


//Public
export default class JobsController {
  constructor() {
    console.log(5)
    _drawJobs();
  }

  createJob() {
    event.preventDefault();
    let form = event.target
    let rawJob = {
      // @ts-ignore
      position: form.position.value,
      // @ts-ignore
      salary: form.salary.value,
      // @ts-ignore
      posted: form.posted.value,
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.img.value
    }
    debugger
    jobsService.createJob(rawJob)
    _drawJobs();
  }

  removeJob(id) {
    debugger
    console.log('hornk', id)
    jobsService.removeJob(id);
    _drawJobs();
  }

}