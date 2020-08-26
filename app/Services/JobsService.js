import Job from "../Models/Job.js";
import STORE from "../store.js";

//Public
class JobsService {
  removeJob(id) {
    let jobIndex = STORE.State.jobs.findIndex(c => c.id === id)
    if (jobIndex === -1) {
      console.error("invalid id")
      return
    }
    STORE.State.jobs.splice(jobIndex, 1)
  }

  createJob(rawJob) {
    let job = new Job(rawJob)
    STORE.State.jobs.push(job)
  }
}

const SERVICE = new JobsService();
export default SERVICE;