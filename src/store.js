import {Store} from 'svelte/store';
import portItems from './_portfolio.js';

class AppStore extends Store {
  
  isIn() {
    this.set({slideIn: true});
  }


  isOut() {
    this.set({slideIn: false});
  }

}

export default new AppStore({
  siteTitle: 'G. Ramon Villarreal, Graphic Designer',
  slideIn: false,
  portItems,
  showNav: false,
});