export class Pedidos {
    constructor() {

    }

    carregar() {
        return `
            <div id='main-d-pedidos'">
                <h1>Página de Pedidos</h1>

                <div id='pedidos'>
                
                    <div class="info_pedido" id='brew'>
                        <div class="PU-d-flex">
                            <div class="preco_pedido"> R$15,90 </div>
                            <div class="unidade_pedido"> 1 unidade(s) </div>
                        </div>
                        <h2> COLD BREW </h2>
                        <div class="img_bebida">
                            <img src="./../img/cold_brew.png" alt="Imagem do Cold Brew">
                        </div>
                        <div class="descricao">
                            <p> Frio, suave e menos ácido. <br> Perfeito para amantes de café refrescante. </p>
                        </div>
                        <div id='btn-options'>
                            <button class="btn_editar_pedido" onclick="window.location.href='#editar';"> EDITAR PEDIDO </button>
                            <button class="btn_excluir_pedido" id='excl_btn'> <ion-icon name="trash-bin-outline"></ion-icon> </button>
                        </div>
                    </div>

                    <div class="info_pedido" id='milkshake'>
                        <div class="PU-d-flex">
                            <div class="preco_pedido"> R$15,90 </div>
                            <div class="unidade_pedido"> 1 unidade(s) </div>
                        </div>
                        <h2> MILKSHAKE DE MORANGO </h2>
                        <div class="img_bebida">
                            <img src="./../img/milkshake.png" alt="Imagem do MILKSHAKE DE MORANGO">
                        </div>
                        <div class="descricao">
                            <p> Cremoso, doce e cheio de sabor. <br> Ideal para um refresco imediato! </p>
                        </div>
                        <div id='btn-options'>
                            <button class="btn_editar_pedido" onclick="window.location.href='#editar';"> EDITAR PEDIDO </button>
                            <button class="btn_excluir_pedido" id='excl_btn'> <ion-icon name="trash-bin-outline"></ion-icon> </button>
                        </div>
                    </div>

                    <div class="info_pedido" id='boba'>
                        <div class="PU-d-flex">
                            <div class="preco_pedido"> R$15,90 </div>
                            <div class="unidade_pedido"> 1 unidade(s) </div>
                        </div>
                        <h2> CHÁ DE BOLHAS </h2>
                        <div class="img_bebida">
                            <img src="./../img/boba.png" alt="Imagem do CHÁ DE BOLHAS">
                        </div>
                        <div class="descricao">
                            <p> Leve, efervescente e suave. <br> Traz seu frescor a cada gole. </p>
                        </div>
                        <div id='btn-options'>
                            <button class="btn_editar_pedido" onclick="window.location.href='#editar';"> EDITAR PEDIDO </button>
                            <button class="btn_excluir_pedido" id='excl_btn'> <ion-icon name="trash-bin-outline"></ion-icon> </button>
                        </div>
                    </div>

                    <div class="info_pedido" id='smoothie'>
                        <div class="PU-d-flex">
                            <div class="preco_pedido"> R$15,90 </div>
                            <div class="unidade_pedido"> 1 unidade(s) </div>
                        </div>
                        <h2> SMOOTHIE DE MIRTILO </h2>
                        <div class="img_bebida">
                            <img src="./../img/smoothie.png" alt="Imagem do SMOOTHIE DE MIRTILO">
                        </div>
                        <div class="descricao">
                            <p> Cremoso, fresco e saboroso. <br> Capaz de revitalizar e nutrir! </p>
                        </div>
                        <div id='btn-options'>
                            <button class="btn_editar_pedido" onclick="window.location.href='#editar';"> EDITAR PEDIDO </button>
                            <button class="btn_excluir_pedido" id='excl_btn'> <ion-icon name="trash-bin-outline"></ion-icon> </button>
                        </div>
                    </div>

                </div>                

            </div>

            <div id='delete-popup'>
                <h2> <ion-icon name="trash-bin-outline"></ion-icon> <br> Tem certeza que deseja cancelar este pedido? </h2>

                <div id='btn-del-options'>
                    <button id='cancel-del'> NÃO </button>
                    <button id='confirm-del'> SIM </button>
                </div>

            </div>
        `;

    }

    Teste(){
        console.log('Teste');

        const botoesExcluir = document.querySelectorAll('button#excl_btn')

        botoesExcluir.forEach(botao => {
            botao.addEventListener('click', () => {                

                const mainPedidos = document.getElementById('main-d-pedidos')
                mainPedidos.style.filter = 'blur(0.5vw)'
                mainPedidos.style.transition = '0.1s'
                mainPedidos.style.overflowY = 'hidden'
                mainPedidos.style.opacity = '0.8'

                const popup = document.getElementById('delete-popup')
                popup.style.display = 'block'
                popup.style.filter = 'none'

                const cancelar = document.getElementById('cancel-del')
                const confirmar = document.getElementById('confirm-del')

                cancelar.addEventListener('click', () => {
                    popup.style.display = 'none'
                    mainPedidos.style.filter = 'none'
                    mainPedidos.style.overflowY = 'auto'
                    mainPedidos.style.opacity = '1'
                })

                confirmar.addEventListener('click', () => {
                    botao.parentElement.parentElement.style.display = 'none'
                    popup.style.display = 'none'
                    mainPedidos.style.filter = 'none'
                    mainPedidos.style.overflowY = 'auto'
                    mainPedidos.style.opacity = '1'
                })

            })
        })

    }
    
}