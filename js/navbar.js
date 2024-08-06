export class NavBar{
    constructor() {
        this.elemento = document.querySelector('nav')
    }

    carregar() {
        
        this.elemento.innerHTML  = `
            <a href='#home' id='home-link'> DrinqShop </a>
            <a href='#pedidos' id='pedidos-link'> | Pedidos </a>
        `
    }
}