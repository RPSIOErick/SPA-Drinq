export class NavBar{
    
    // Método construtor da NavBar
    constructor() {
        this.elemento = document.querySelector('nav')
    }

    // Método para carregar a NavBar
    carregar() {
        
        this.elemento.innerHTML  = `
            <a href='#home' id='home-link'> DrinqShop </a>
            <a href='#pedidos' id='pedidos-link'> Pedidos </a>
        `
    }
}