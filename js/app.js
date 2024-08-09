// Import de classes
import { NavBar } from './navbar.js';
import { Router } from './router.js';
import { Home } from './home.js';
import { Pedidos } from './pedidos.js';
import { Editar } from './editar.js';

// Classe App
class App {

    // Método construtor da classe App
    constructor() {
        this.nav = new NavBar(); // Instanciando a classe NavBar
        this.router = new Router(); // Instanciando a classe Router
        this.iniciar(); // Chamando o método iniciar
    }

    // Método iniciar
    iniciar() {

        // Carregando os arquivos CSS
        this.carregarCSS('style.css'); // Carregando o arquivo principal (style.css)
        this.carregarCSS('pedidos.css') // Carregando o estilo da página de pedidos
        this.carregarCSS('editar.css') // Carregando o estilo da página de editar
        this.carregarCSS('home.css') // Carregando o estilo da página de home

        // Carregando a NavBar
        this.nav.carregar();

        // Adicionando evento de clique para navegar para a página inicial (Home)
        document.getElementById('home-link').addEventListener('click', () => {
            
            // Configurando o hash da URL para "#home"
            window.location.hash = '#home';

            // Chamando o método navegar da classe Router
            this.router.navegar();
        });

        // Adicionando evento de clique para navegar para a página de pedidos
        document.getElementById('pedidos-link').addEventListener('click', () => {
            
            // Configurando o hash da URL para "#pedidos"
            window.location.hash = '#pedidos';

            // Chamando o método navegar da classe Router
            this.router.navegar();
        });

        // Chamando o método navegar da classe Router
        this.router.navegar();

        // Adicionando a lógica para carregar as páginas de acordo com o Hash da URL
        if (window.location.hash === '#home' || window.location.hash === '') {
            
            // Instanciando a classe Home
            const home = new Home();
            
            // Carregando o conteúdo da Home page
            document.getElementById('main-content').innerHTML = home.carregar();

            // Carregando o método presente na classe Home
            home.eventosHome();
        }
        else if (window.location.hash === '#pedidos') {

            // Instanciando a classe Pedidos
            const pedidos = new Pedidos();

            // Carregando o conteúdo da página de pedidos
            document.getElementById('main-content').innerHTML = pedidos.carregar()
        }
        else if (window.location.href === '#editar') {

            // Instanciando a classe Editar
            const editar = new Editar();

            // Carregando o conteúdo da página de editar
            document.getElementById('main-content').innerHTML = editar.carregar()
        }
    }

    // Método para carregar arquivos CSS
    carregarCSS(nomeDoArquivo) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `css/${nomeDoArquivo}`;
        document.head.appendChild(link);
    }
}


const app = new App();
