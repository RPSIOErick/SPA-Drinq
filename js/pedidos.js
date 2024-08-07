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
                        <button class="btn_editar_pedido" onclick="window.location.href='#editar';"> EDITAR PEDIDO </button>
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
                        <button class="btn_editar_pedido"> EDITAR PEDIDO </button>
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
                        <button class="btn_editar_pedido"> EDITAR PEDIDO </button>
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
                        <button class="btn_editar_pedido"> EDITAR PEDIDO </button>
                    </div>

                </div>

            </div>
        `;
    }
}