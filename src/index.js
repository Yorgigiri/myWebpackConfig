import Greet from './js/greeter';
import './scss/App.scss';

import { MDCRipple } from '@material/ripple/index';
import { MDCDialog } from '@material/dialog';

const ripple = new MDCRipple(document.querySelector('.foo-button'));
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));


// let batt = document.getElementById('foo-button2');

// batt.addEventListener('click', function(){
//     dialog.open();
// });




