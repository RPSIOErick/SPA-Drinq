// Import de Classes
import { Home } from './home.js'
import { Pedidos } from './pedidos.js'
import { Editar } from './editar.js'

export class Router {

    // Método construtor da classe Router
    constructor() {

        // Rotas da aplicação
        this.rotas = {
            '#home': new Home(),
            '#pedidos': new Pedidos(),
            '#editar': new Editar()
        }

        // Adicionando eventos de navegação
        window.addEventListener('load', this.navegar.bind(this))
        window.addEventListener('hashchange', this.navegar.bind(this))
    }

    // Método para navegar entre as páginas
    navegar() {
        const divConteudo = document.getElementById('main-content') // Pega o elemento que contem o conteúdo da página
        const hash = window.location.hash // Pega o hash da URL

        const pagina = this.rotas[hash] || this.rotas['#home'] // Pega a página correspondente ao hash
        divConteudo.innerHTML = pagina.carregar() // Carrega o conteúdo da página

        // Verifica qual página está sendo acessada
        if (hash === '#home' || !hash) {

            // Inicializa os eventos da página Home
            pagina.eventosHome()
            pagina.inicializarEventos()
        }

        if (hash === '#pedidos') {

            // Inicializa o evento da página Pedidos
            pagina.DeleteFunc()
        }

        if(hash === '#editar'){

            // Inicializa os eventos da página Editar
            pagina.BebidaInfo()
            pagina.inicializarEventos()
        }
    }
}
