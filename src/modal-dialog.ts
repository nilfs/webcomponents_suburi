declare var bootstrap : any

export default class ModalDialogElement extends HTMLElement {
    modal : any;

    constructor() {
        super();

        const template = document.getElementById('modal-dialog') as HTMLTemplateElement;
        const templateContent = template.content;
        const shadow = this.attachShadow({mode:'open'})

        shadow.appendChild(templateContent.cloneNode(true));

        this.modal = new bootstrap.Modal(shadow.querySelector('.modal'), {
        })
    }

    connectedCallback() {
        this.addEventListener('open', this.onOpen)
    }

    disconnectedCallback() {
        this.removeEventListener('open', this.onOpen)
    }

    onOpen() {
        this.modal.show();
    }
}

customElements.define('modal-dialog', ModalDialogElement)