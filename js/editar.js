export class Editar {

    // Método construtor da página de editar
    constructor() {
        this.precoUnitario = {
            'COLD BREW': 15.90,
            'MILKSHAKE DE MORANGO': 12.90,
            'CHÁ DE BOLHAS': 27.90,
            'SMOOTHIE DE MIRTILO': 14.90
        };
        this.quantidade = 1; // Inicializa com 1 unidade
    }

    // Método para carregar a página de editar
    carregar() {
        return `
            <div id='main-d-editar'>
                <img id='img-edit-bebida' src="" alt="Imagem da Bebida">
                <div id='bebida-edit-info'> 
                    <h1 id='bebida-info-title'> SMOOTHIE DE MIRTILO </h1>
                    <div id='d-form-edit'>
                        <form>
                            <div id='d-form-unidade'>1 unidade(s)</div>
                            <span>
                                <input type='button' id='btn-minus' value='<'>
                                <input type='text' id='d-form-preco' name='preco_bebida' readonly>
                                <input type='button' id='btn-plus' value='>'>
                            </span>
                            <div id='d-form-obs'>
                                <p> Observações </p>
                                <textarea></textarea>
                            </div>
                            <input type='submit' value='Salvar'>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    // Método para carregar as informações da bebida
    BebidaInfo() {

        const nomeBebida = document.getElementById('bebida-info-title').innerText; // Pega o elemento que contem o nome da bebida
        const imgBebida = document.getElementById('img-edit-bebida'); // Pega o elemento que contem a imagem da bebida
        const precoBebida = document.getElementById('d-form-preco'); // Pega o elemento que contem o preço da bebida

        // Verifica qual bebida foi selecionada e atualiza a imagem e o preço
        if(nomeBebida === 'COLD BREW') {

            // Atualiza a imagem e o preço
            imgBebida.src = './../img/cold_brew.png';
            precoBebida.value = 'R$ 15,90';

        } else if(nomeBebida === 'MILKSHAKE DE MORANGO') {

            // Atualiza a imagem e o preço
            imgBebida.src = './../img/milkshake.png';
            precoBebida.value = 'R$ 12,90';

        } else if(nomeBebida === 'CHÁ DE BOLHAS') {
            
            // Atualiza a imagem e o preço
            imgBebida.src = './../img/boba.png';
            precoBebida.value = 'R$ 27,90';

        } else if(nomeBebida === 'SMOOTHIE DE MIRTILO') {

            // Atualiza a imagem e o preço
            imgBebida.src = './../img/smoothie.png';
            precoBebida.value = 'R$ 14,90';
            
        }
    }

    // Método para adicionar uma unidade da bebida
    adicionar() {
        const bebida = document.getElementById('bebida-info-title').innerText;

        this.quantidade += 1; // Aumenta a quantidade
        document.getElementById('d-form-unidade').innerHTML = this.quantidade + ' unidade(s)'; // Atualiza a quantidade exibida

        const precoUnitario = this.precoUnitario[bebida];
        const precoTotal = precoUnitario * this.quantidade; // Calcula o preço total

        document.getElementById('d-form-preco').value = 'R$ ' + precoTotal.toFixed(2).replace('.', ','); // Atualiza o preço total
    }

    // Método para remover uma unidade da bebida
    remover() {
        if (this.quantidade > 1) { // Impede a quantidade de ser menor que 1
            this.quantidade -= 1;
            document.getElementById('d-form-unidade').innerHTML = this.quantidade + ' unidade(s)';

            const bebida = document.getElementById('bebida-info-title').innerText;
            const precoUnitario = this.precoUnitario[bebida];
            const precoTotal = precoUnitario * this.quantidade;

            document.getElementById('d-form-preco').value = 'R$ ' + precoTotal.toFixed(2).replace('.', ',');
        }
    }

    // Método para inicializar os eventos da página de editar
    inicializarEventos() {
        document.getElementById('btn-plus').addEventListener('click', () => this.adicionar());
        document.getElementById('btn-minus').addEventListener('click', () => this.remover());
    }
}
