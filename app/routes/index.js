import Ember from 'ember';

var articles = [{
  id: 1,
  head: 'Trump Threatens to "Totally Destroy" North Korea in First',
  img: 'http://ampthemag.com/wp-content/uploads/2016/05/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg',
  par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
}, {
  id: 2,
  head: 'Putin displays massive firepower in Russian war games on border ...',
  img: 'https://qzprod.files.wordpress.com/2017/05/rtr15m1h1.jpg?quality=80&strip=all',
  par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
}]
export default Ember.Route.extend({
  model() {
    return articles;
  }
});