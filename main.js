import {html, css, LitElement} from 'lit';
import "@ui5/webcomponents/dist/Button.js";

export class NavBar extends LitElement {
  static styles = css`
  .nav-bar ul {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: white;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .nav-bar-1 li {
    height: 50px;
  }
  .nav-bar-2 li {
    height: 40px;
    float: right;
  }
  nav a {
    height: 100%;
    padding: 0 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
  }

  nav a:hover {
    background-color: grey;
  }

  nav .left-cluster {
    margin-right: auto;
  }
  `;

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