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
    new House({ beds: "10", baths: "5", yearbuilt: "1785", price: "10,000,000", img: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/07/french-villa-sm.jpg", description: "This lovely seaside villa is your large slice of paradise in France." }),
    new House({ beds: "5", baths: "3", yearbuilt: "1983", price: "100,000", img: "https://bloximages.chicago2.vip.townnews.com/rexburgstandardjournal.com/content/tncms/assets/v3/editorial/3/73/373595c6-2445-11e0-8a06-001cc4c002e0/4d37aba6c3f39.image.jpg", description: "Discounted for quick sale.  May contain snakes." }),
    new House({ beds: "10", baths: "5", yearbuilt: "1785", price: "10,000,000", img: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/07/french-villa-sm.jpg", description: "This lovely seaside villa is your large slice of paradise in France." })
  ],
  /** @type {Job[]} */
  jobs: [

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
