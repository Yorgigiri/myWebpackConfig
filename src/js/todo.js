let React = require('react');
let ReactDOM = require('react-dom');
import { MDCTextField } from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

class Todo extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        
        return (

            <div class="mdc-text-field">
                <input type="text" id="my-text-field" class="mdc-text-field__input" />
                <label class="mdc-floating-label" for="my-text-field">Hint text</label>
                <div class="mdc-line-ripple"></div>
            </div>

        );
    }

}

export default Todo;