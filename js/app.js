import { NavBar } from './navbar.js';
import { Router } from './router.js';
import { Home } from './home.js'; // Certifique-se de importar a classe Home
import { Pedidos } from './pedidos.js';
import { Editar } from './editar.js';

class App {
    constructor() {
        this.nav = new NavBar();
        this.router = new Router();
        this.iniciar();
    }

    iniciar() {
        this.carregarCSS('style.css'); // Adicionando CSS
        this.carregarCSS('pedidos.css')
        this.carregarCSS('editar.css')

        this.nav.carregar();
        document.getElementById('home-link').addEventListener('click', () => {
            window.location.hash = '#home';
            this.router.navegar();
        });

        document.getElementById('pedidos-link').addEventListener('click', () => {
            window.location.hash = '#pedidos';
            this.router.navegar();
        });

        this.router.navegar();

        // Adicionando a lógica para carregar a Home page
        if (window.location.hash === '#home' || window.location.hash === '') {
            const home = new Home();
            document.getElementById('main-content').innerHTML = home.carregar();
            home.adicionarEventoMudancaCor();
        }
        else if (window.location.hash === '#pedidos') {
            const pedidos = new Pedidos();
            document.getElementById('main-content').innerHTML = pedidos.carregar()
        }
        else if (window.location.href === '#editar') {
            const editar = new Editar();
            document.getElementById('main-content').innerHTML = editar.carregar()
        }
    }

    carregarCSS(nomeDoArquivo) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `css/${nomeDoArquivo}`;
        document.head.appendChild(link);
    }
}

const app = new App();
