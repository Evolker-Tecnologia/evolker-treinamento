//Componente pai, modifica dados e compartilha seus props.
import React, { Component } from 'react';
import Lista from '../Lista/lista';
import './controlador.css';

//Props: dados que mandamos de um componente para outro. Props são apenas para o outro componente ler as propriedades do componente que está a passar, não é possível mudar um props dentro do outro componente que está a acessá-lo.
//State: dados que é local ou privado daquele componente. (outros componentes não podem acessar esse state, os dados são passados através dos props).


class ControladorLista extends Component {
    //Esse state é interno e privado, o componente <Lista> não tem acesso a este state, seus valores são passados através dos props.
    state = {
        itens: [],
    };

    receberInputeSubstituir = valor => {
        //Ao substituir o state do componente com setState, cria-se as propriedades nome(com o nome atual do input), id(através da função NewDate) e modificado: false e atribui o novo state o valor atual do target que é recebido através do input (com a função Onchange).
        this.setState({ nome: valor.target.value });
    }

    //Função para quando clicar no botão salvar, atualizar a propriedade item com um novo id (gerado automaticamente) e o nome do imput
    adicionarItemNaLista = item => {
        //Enviar o nome e o id para o array de itens
        this.state.itens.push(item);
        //Atualizar o nome anterior. (que foi criado na função receberInputeSubstituir).
        this.setState({ itens: this.state.itens });
        // console.log(name);
    }

    //Método para deletar um item
    deletarItem = itemId => {
        //Atualiza o itens sem o objeto deletado.
        const itens = this.state.itens.filter(i => i.id !== itemId);
        //Atualizo as propriedades do array de itens.
        this.setState({ itens });
    }

    //Método para editar um tem da lista
    editarItem = (itemId) => {
        //buscar o item baseado no id recebido.
        const item = this.state.itens.find(i => i.id === itemId);
        //A propriedade modificado deverá ser true para mostrar o input da edição.
        item.modificado = true;
        //Atualizo as propriedades do array de itens.
        this.setState({ itens: this.state.itens });
    }

    //Método para atualizar o item atual
    atualizarItem = (itemAtualizado) => {
        //(item) está com o valor anterior, estou bucando o item baseado no id do item atualizado.
        const item = this.state.itens.find(i => i.id === itemAtualizado.id);
        //Com o elemento que tenho descobri qual era o index desse item dentro do array de itens
        var index = this.state.itens.indexOf(item);

        //A propriedade modificado deverá ser sempre false para que esconda o input de edição
        itemAtualizado.modificado = false;

        //Substitui o item antereior de index X pelo item atualizado.
        if (index > -1) {
            this.state.itens[index] = itemAtualizado;
        }

        //Atualizo as propriedades do array de itens.
        this.setState({ itens: this.state.itens });
    }


    //render() é um método padrão do React para renderizar (mostrar no DOM).
    render() {
        return (
            //Os elementos dentro do return devem sempre estar entre <div></div> ou <React.Fragment>
            <div className="field">
                <h1 className="title">Lista</h1>
                <input className="input" type="text" onChange={this.receberInputeSubstituir}></input>
                {/* ao clicar envia o name atual do state e um id gerado automaticamente e uma propriedade booleana como um objeto no argumento para a função adicionarItemNaLista() */}
                <button onClick={() => this.adicionarItemNaLista({ id: new Date().getMilliseconds(), nome: this.state.nome, modificado: false })}>Adicionar</button>
                {this.state.itens.map((item, index) =>
                    //A propriedade key é usado internamente pelo React
                    <Lista key={index} onAdd={this.adicionarItemNaLista} onDelete={this.deletarItem} onEdit={this.editarItem} onUpdate={this.atualizarItem} item={item} />)}
            </div>
        );
    }
}

export default ControladorLista;

