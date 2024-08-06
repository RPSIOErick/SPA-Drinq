import { Home } from './home.js'
import { Pedidos } from './pedidos.js'

export class Router {

    constructor() {
        this.rotas = {
            '#home': new Home(),
            '#pedidos': new Pedidos(),
        }

        window.addEventListener('load', this.navegar.bind(this))
        window.addEventListener('hashchange', this.navegar.bind(this))
    }

    navegar() {
        const divConteudo = document.getElementById('main-content')
        const hash = window.location.hash

        const pagina = this.rotas[hash] || this.rotas['#home']
        divConteudo.innerHTML = pagina.carregar()

        // Adiciona os eventos após carregar o conteúdo
        if (hash === '#home' || !hash) {
            pagina.adicionarEventoMudancaCor()
            pagina.inicializarEventos()
        }
    }
}
