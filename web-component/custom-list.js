class CustomList extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>`;
    }
}

customElements.define('custom-list', CustomList);