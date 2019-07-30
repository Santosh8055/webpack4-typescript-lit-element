import { customElement, html, LitElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
  // Declare and initialize properties
  @property({ type: String }) public prop1 = 'Hello World';
  @property({ type: Number }) public prop2 = 5;
  @property({ type: Boolean }) public prop3 = true;
  @property({ type: Array }) public prop4 = [1, 2, 3];
  @property({ type: Object }) public prop5 = { subprop1: 'hi', thing: 'fasdfsf' };

  public render() {
    return html`
      <p>prop1: ${this.prop1}</p>
      <p>prop2: ${this.prop2}</p>
      <p>prop3: ${this.prop3}</p>

      <p>
        prop4:
        ${this.prop4.map(
          (item, index) =>
            html`
              <span>[${index}]:${item}&nbsp;</span>
            `
        )}
      </p>

      <p>
        prop5:
        ${Object.keys(this.prop5).map(
          (item) =>
            html`
              <span>${item}: ${this.prop5[item]}&nbsp;</span>
            `
        )}
      </p>
    `;
  }
}
