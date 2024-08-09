export class Home {

    // Método construtor da página de home
    constructor() {
        // Preços unitários para cada bebida
        this.precoUnitario = {
            'cold_brew': 15.90,
            'milkshake_morango': 12.90,
            'cha_bolhas': 27.90,
            'smoothie_mirtilo': 14.90
        };
        this.quantidade = 0; // Inicializa a quantidade de bebida selecionada
    }

    carregar() {
        return `
            <div id='triangle-deco'></div>
            
            <div id='d-form-cad'>
                <h1 id='titulo-form-cad'> SELECIONE UMA BEBIDA </h1>

                <form id='form-cad'>
                    <p> 
                        <select id="bebidas" name="bebidas">
                            <option value="null" disabled selected>Selecione uma bebida!</option>
                            <option value="cold_brew">Cold Brew</option>
                            <option value="milkshake_morango">Milkshake de Morango</option>
                            <option value="cha_bolhas">Chá de Bolhas</option>
                            <option value="smoothie_mirtilo">Smoothie de Mirtilo</option>
                        </select>
                    </p>
                    <div id='bebida_info' style='display: none;'>
                        <p> 
                            <label for="preco_bebida">Preço</label>

                            <span style='display: flex;'>

                                <input type='button' id='btn-count-minus' value='<'>
                                <input type="text" id="preco_bebida" name="preco_bebida" readonly>
                                <input type='button' id='btn-count-plus' value='>'>

                            </span>

                            <span id='qntd_bebida'>  </span>

                        </p>
                        <p>
                            <label for="obervacoes"> Observações </label>
                            <textarea id="observacoes" name="observacoes" placeholder="Digite aqui suas observações..."></textarea>
                        </p>
                        <p>
                            <button type='button' id='btn-cad'> PEDIR </button>
                        </p>
                    </div>
                </form>
            </div>

            <div id='imagem-bebida'>

                <div id='preco'> </div>

                <img id='bebida-img' src='./../img/decorative_cups.png' alt='Imagem da bebida' />

                <p id='nome-bebida'> </p>
            </div>
        `;
    }

    // Método para adicionar os eventos dinâmicos da página Home
    eventosHome() {
        document.getElementById('bebidas').addEventListener('change', (event) => {
            const bebida = event.target.value; // Obtém a bebida selecionada
            const gradient = this.getGradient(bebida); // Obtém o gradiente de fundo de acordo com a bebida
            const imgSrc = this.getImageSrc(bebida); // Obtém a imagem da bebida de acordo com a bebida selecionada
            const preco = this.getPreco(bebida); // Obtém o preço formatado da bebida
            const nomeBebida = this.getNomeBebida(bebida); // Obtém o nome da bebida
 
            document.body.style.backgroundImage = gradient; // Muda o gradiente do fundo
            document.getElementById('bebida-img').src = imgSrc; // Atualiza a imagem da bebida
            document.getElementById('preco').innerHTML = preco; // Atualiza o preço exibido
            document.getElementById('preco_bebida').value = preco; // Atualiza o preço no campo de texto
            document.getElementById('nome-bebida').innerHTML = nomeBebida; // Atualiza o nome da bebida

            document.getElementById('preco').style.opacity = 1; // Garante que o preço esteja visível
            this.quantidade = 1;  // Reseta a quantidade quando uma nova bebida é selecionada

            // Exibe ou esconde o formulário de cadastro da bebida
            if(bebida !== 'null') {
                document.getElementById('bebida_info').style.display = 'block'; // Exibe as informações da bebida
            } else {
                document.getElementById('bebida_info').style.display = 'none'; // Esconde as informações da bebida
            }
            
        });
    }

    // Obtém o gradiente de fundo baseado na bebida selecionada
    getGradient(bebida) {
        switch(bebida) {
            case 'cold_brew': 
                return 'linear-gradient(to right, #8B695F, #D7A281)';
            case 'milkshake_morango': 
                return 'linear-gradient(to right, #FFB6C1, #FF69B4)';
            case 'cha_bolhas': 
                return 'linear-gradient(to right, #9DBA0E, #DEBA8A)';
            case 'smoothie_mirtilo': 
                return 'linear-gradient(to right, #8A2BE2, #4B0082)';
            default: 
                return 'linear-gradient(to right, #CF7097 #3C4054)';
        }
    }

    // Obtém a imagem da bebida baseada na bebida selecionada
    getImageSrc(bebida) {
        switch(bebida) {
            case 'cold_brew': 
                return './../img/cold_brew.png';
            case 'milkshake_morango': 
                return './../img/milkshake.png';
            case 'cha_bolhas': 
                return './../img/boba.png';
            case 'smoothie_mirtilo': 
                return './../img/smoothie.png';
            default: 
                return './../img/decorative_cups.png';
        }
    }

    // Obtém o nome da bebida baseado na bebida selecionada
    getNomeBebida(bebida) {
        switch(bebida) {
            case 'cold_brew': 
                return 'COLD BREW';
            case 'milkshake_morango': 
                return 'MILKSHAKE DE MORANGO';
            case 'cha_bolhas': 
                return 'CHÁ DE BOLHAS';
            case 'smoothie_mirtilo': 
                return 'SMOOTHIE DE MIRTILO';
            default: 
                return '';
        }
    }

    // Obtém o preço formatado da bebida selecionada
    getPreco(bebida) {
        return bebida === 'null' ? '' : 'R$ ' + this.precoUnitario[bebida].toFixed(2).replace('.', ',');
    }

    // Método para adicionar uma unidade à quantidade e atualizar o preço total
    adicionar() {
        const bebida = document.getElementById('bebidas').value;
        if (!bebida || bebida === 'null') return; // Verifica se uma bebida está selecionada

        this.quantidade += 1; // Aumenta a quantidade
        document.getElementById('qntd_bebida').innerHTML = this.quantidade + 'x'; // Atualiza a quantidade exibida

        const precoUnitario = this.precoUnitario[bebida];
        const precoTotal = precoUnitario * this.quantidade; // Calcula o preço total

        document.getElementById('preco_bebida').value = 'R$ ' + precoTotal.toFixed(2).replace('.', ','); // Atualiza o preço total
    }

    // Método para remover uma unidade da quantidade e atualizar o preço total
    remover() {
        const bebida = document.getElementById('bebidas').value;
        if (!bebida || bebida === 'null') return; // Verifica se uma bebida está selecionada

        if (this.quantidade > 0) {
            this.quantidade -= 1; // Diminui a quantidade
            document.getElementById('qntd_bebida').innerHTML = this.quantidade + 'x'; // Atualiza a quantidade exibida

            const precoUnitario = this.precoUnitario[bebida];
            const precoTotal = precoUnitario * this.quantidade; // Calcula o preço total

            document.getElementById('preco_bebida').value = 'R$ ' + precoTotal.toFixed(2).replace('.', ','); // Atualiza o preço total
        }
    }

    // Método para inicializar os eventos dos botões
    inicializarEventos() {
        document.getElementById('btn-count-plus').addEventListener('click', () => this.adicionar()); // Adiciona evento ao botão +
        document.getElementById('btn-count-minus').addEventListener('click', () => this.remover()); // Adiciona evento ao botão -
    }
}