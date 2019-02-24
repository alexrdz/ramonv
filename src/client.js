import * as sapper from '../__sapper__/client.js';
import store from './store';

window.store = store;

sapper.start({
	target: document.querySelector('#sapper'),
	store: () => store,
});