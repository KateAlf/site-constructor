import {AbstractComponent} from "./abstract-component.js";
import {DEFAULT_COLUMN_INDEX, renderElement} from "../utils.js";
import {ChooseElementComponent} from "./choose-element-component.js";

export class ContentBlockComponent extends AbstractComponent {
  constructor(columnIndex = DEFAULT_COLUMN_INDEX) {
    super();
    this._columnIndex = columnIndex;
  }

  _getTemplate() {
    return `
      <div class="content content-${this._columnIndex} content--empty">
        <p class="placeholder">Content</p>
        <button class="add-btn" type="button">
          <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
                  fill="#80CCF0" fill-rule="evenodd"/>
          </svg>
        </button>
      </div>`
  }

  _afterCreateElement() {
    this._chooseElementComponent = new ChooseElementComponent();
    renderElement(this.getElement(), this._chooseElementComponent.getElement())

    this.getElement().querySelector(`button.add-btn`).addEventListener(`click`, this._onAddBtnClick.bind(this))
  }

  _onAddBtnClick(e) {
    this._chooseElementComponent.getElement().classList.toggle('hidden-block');
  }
}
