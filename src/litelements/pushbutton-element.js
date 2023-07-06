import { render } from '@testing-library/react';
import { css, customElement, html, LitElement, property } from 'lit-element';


@customElement('wow-button')
class PushbuttonElement extends LitElement {
   @property() color = 'red';
   @property() pressed = false;
   static get styles() {
    return css `
     button {
        border: none;
        backbround: none;
        width: auto;
        height:auto;
     }

     button:active {
        background: blue
     }
     .clickable-element {
        cursor: pointer
     }
    `
   }


render() {
    const {color} = this;
    return html`
     <button
      aria-label="${color} pushbutton"
      @mousedown=${this.down}
      @mouseup=${this.up}>
      Hey it is me!
      </button>
    `;
}

down() {
    if (!this.pressed) {
        this.pressed = true;
        this.dispatchEvent(new Event('button-press'))
    }
}

up() {
    if (!this.pressed) {
        this.pressed = false;
        this.dispatchEvent(new Event('button-release'))
    }
}

}
export default PushbuttonElement;