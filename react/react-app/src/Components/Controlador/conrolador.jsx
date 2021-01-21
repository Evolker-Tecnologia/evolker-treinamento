//Componente pai, modifica dados e compartilha seus props.
import React, { Component } from 'react';
import Lista from '../Lista/lista';
import './controlador.css';

//Props: dados que mandamos de um componente para outro. Props são apenas para o outro componente ler as propriedades do componente que está a passar, não é possível mudar um props dentro do outro componente que está a acessá-lo.
//State: dados que é local ou privado daquele componente. (outros componentes não podem acessar esse state, os dados são passados através dos props).


class ControladorLista extends Component {
    //Esse state é interno e privado, o componente <Lista> não tem acesso a este state, seus valores são passados através dos props.
    state = {
        itens: []
    };

    //Função para receber o valor atual do Input através do Onchange.
    receberInputeSubstituir = valor => {
        //Ao substituir o state do componente com setState, cria-se uma propriedade (nome) e atribui a ela o valor do target que é recebido através do input.
        this.setState({ nome: valor.target.value });
        // console.log(this.state.name);
    }

    //Função para quando clicar no botão salvar, atualizar a propriedade item com um novo id (gerado automaticamente) e o nome do imput
    adicionarItemNaLista = item => {
        //Enviar o nome e o id para o array de itens
        this.state.itens.push(item);
        //Atualizar o nome anterior. (que foi criado na função receberInputeSubstituir).
        this.setState({ item: this.state.itens });
        // console.log(name);
    }

    //O componente lista.jsx lança o evento pelo botão Deletar e este componente lida com o evento (onDelete).
    deletarItem = itemId => {
        //Atualiza o itens sem o objeto deletado.
        const itens = this.state.itens.filter(i => i.id !== itemId);
        //Atualizar itens
        this.setState({ itens });
    }

    //render() é um método padrão do React para renderizar (mostrar no DOM).
    render() {
        return (
            //Os elementos dentro do return devem sempre estar entre <div></div>.
            <div className="field">
                <h1 className="title">Lista</h1>
                <input className="input" type="text" onChange={this.receberInputeSubstituir}></input>
                {/* ao clicar envia o name atual do state e um id gerado automaticamente como um objeto no argumento para a função adicionarItemNaLista() */}
                <button onClick={() => this.adicionarItemNaLista({ id: new Date(), nome: this.state.nome })}>Adicionar</button>

                {this.state.itens.map((item, index) =>
                    //Passar onAdd e item como props para lista.jsx
                    //A propriedade key é usado internamente pelo React
                    <Lista key={index} onAdd={this.adicionarItemNaLista} onDelete={this.deletarItem} item={item} />)}
            </div>
        );
    }
}

export default ControladorLista;

