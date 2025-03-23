import {html, css, LitElement} from 'lit';
import "@ui5/webcomponents/dist/Button.js";

// c1
// c2
// c3
export class NavBar extends LitElement {

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`
    <nav class='nav-bar'>
      <div class='nav-bar-1'>
      <ul>
        <li class='left-cluster'><a href=''>vMart</a></li>
        <li><a href=''>Button1</a></li>
        <li><a href=''>Button2</a></li>
        <a href''><button>Sign In</button></a>
      </ul>
      </div>
      <div class='nav-bar-2'>
      <ul>
        <li><a href=''>T1</a></li>
        <li><a href=''>T2</a></li>
        <li><a href=''>T3</a></li>
        <li><a href=''>T4</a></li>
        <li><a href=''>T5</a></li>
      </ul>
      </div>
    </nav>
    `;
  }
}
customElements.define('vmt-nav-bar', NavBar);
