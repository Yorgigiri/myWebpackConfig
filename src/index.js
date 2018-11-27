import cryptoInfo from './js/cryptoInfo';
import './scss/App.scss';

import { MDCRipple } from '@material/ripple/index';
import { MDCDialog } from '@material/dialog';


const mainRippleButton = document.getElementsByClassName('foo-button'); // Назначаем кнопку по классу для риппл эффекта

for (let i = 0; i < mainRippleButton.length; i++) {
    /**
     * Назначаем риппл эффект на нашу основную кнопку для всех кнопок на странице путём перебора циклом
     *  */
    MDCRipple.attachTo(mainRippleButton[i]); 
}

const aa = new cryptoInfo('domElement');

aa.getCrypto();