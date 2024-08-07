export class Editar {
    constructor() {

    }

    carregar() {
        return `
            <div id='main-d-editar'>

                <img src="./../img/cold_brew.png" alt="Imagem do Cold Brew">

                <div id='bebida-edit-info'> 
                    <h1> COLD BREW </h1>

                    <div id='d-form-edit'>
                        <form>
                            <div id='d-form-unidade'> 1 unidade(s) </div>

                            <span>

                                <input type='button' id='btn-minus' value='<'>
                                <div id='d-form-preco'> R$15,90 </div>
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
        `
    }


}