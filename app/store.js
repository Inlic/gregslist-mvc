import Car from "./Models/Car.js";
import House from "./Models/House.js";
import Job from "./Models/Job.js";
console.log(1);

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ make: "Tesla", model: "Cybertruck", year: 2020, price: 100000, img: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/tesla_pickup.png", description: "It's like living in the future, with 1 broken window." }),
    new Car({ make: "Mystery", model: "Machine", year: 1987, price: 1000, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-classic-mystery-machine-replica-van-built-by-jerry-news-photo-1587131341.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*", description: "Smells like meddling teenagers and a dog" }),
    new Car({ make: "Jeep", model: "Wrangler", year: 1987, price: 1000, img: "https://vignette.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic-park-jeep3-1-.jpg/revision/latest/scale-to-width-down/340?cb=20090417212624", description: "Are those teeth marks?" })
  ],
  /** @type {House[]} */
  houses: [
    new House({ beds: "10", baths: "5", yearbuilt: 1785, price: 10000000, img: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/07/french-villa-sm.jpg", description: "This lovely seaside villa is your large slice of paradise in France." }),
    new House({ beds: "5", baths: "3", yearbuilt: 1983, price: 100000, img: "https://bloximages.chicago2.vip.townnews.com/rexburgstandardjournal.com/content/tncms/assets/v3/editorial/3/73/373595c6-2445-11e0-8a06-001cc4c002e0/4d37aba6c3f39.image.jpg", description: "Discounted for quick sale.  May contain snakes." }),
    new House({ beds: "5", baths: "4", yearbuilt: 2011, price: 1000000, img: "https://cdn.propertiesincostarica.com/properties/Images/oceanview_modern_luxury_beach_property/22_2.jpg", description: "This luxury Costa Rican property has a great view of the jungle and the ocean." })
  ],
  /** @type {Job[]} */
  jobs: [
    new Job({position: "Wendy's Chef", salary:"300k starting",posted: "8/11/2019", company: "Daves Dogfood and Animal Processing Conglomerate",img:"https://icdn6.digitaltrends.com/image/digitaltrends/flippy-screengrab-miso-robotics-759x506.jpg",description: "Welcome to the world of tomorrow? TODAY! Become the ultimate in food product dispensary engineer and fulfill your dreams"}),
    new Job({position: '"Attorney"', salary:"Two popsicles and a rusty bird cage",posted: "11/4/1993", company: "Springfield LLC",img:"https://content.thriveglobal.com/wp-content/uploads/2019/01/Lawyer.jpeg",description: "Works on a contingency basis? No, money down!"}),
    new Job({position: "Startup Intern", salary:"Hopes and Dreams",posted: "10/19/20XX", company: "Initech",img:"https://bbvaopen4u.com/sites/default/files/styles/big-image/public/img/new/bbva-open4u-statup.jpg?itok=JjHnvHP-",description: "Come code at our 200hr endurance hackathon. Those who stay awake till the end may be eligible for a position."})
  ],
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
