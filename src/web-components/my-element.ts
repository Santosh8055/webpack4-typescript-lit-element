import { css, customElement, html, LitElement, property } from 'lit-element';

// This decorator defines the element.
@customElement('my-element')
export class MyElement extends LitElement {

  public static styles = css`
    span {
      color: green;
    }
  `;
  // This decorator creates a property accessor that triggers rendering and
  // an observed attribute.
  @property()
  public mood = 'great';

  // Render element DOM by returning a `lit-html` template.
  public render() {
    return html`
      Web Components are <span>${this.mood}</span>!
    `;
  }
}
