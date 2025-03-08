import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('vmt-nav-bar')
export class NavBar extends LitElement {
  static styles = css`
  p { color: blue }
  `;

  @property()
  name = 'Somebody';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}