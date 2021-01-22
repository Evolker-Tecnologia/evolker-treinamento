//Componente filho do ControladorLista (controlador.jsx).
//Este componente renderiza uma lista, executa métodos internos e notifica mudanças.
//Este componente não possui state e ele passa a ser um (controlled component) componente controlado pelo componente pai. Ele recebe todos os dadaos por props e chama eventos quando os dados precisarem ser modificados.

//props: inclui dados que mandamos de um componente para outro. Props são apenas para o outro componente ler as propriedades do componente que está passando, não é possível mudar um props dentro do outro componente que está a acessá-lo.
//state: inclui dados que é local (interno) ou privado daquele componente (outros componentes não podem acessar esse state, os dados sao passados através dos props).

import React, { Component } from 'react';
import './lista.css';


class Lista extends Component {
    //renderiza a lista de itens gerada pelo controlador.jsx
    //render é um método padrão do React para renderizar (mostrar no DOM).
    render() {
        //variável que busca a propriedade modificado de um item
        const modificado = this.props.item.modificado;
        return (
            <div className="list">
                <section>
                    {/* Método para mostrar ou ocultar o input de edição */}
                    {modificado ? this.inputDeEdicao() : this.renderDoItem()}
                </section>
            </div>
        );
    }

    // Método para renderizar um input e um botão de editar 
    inputDeEdicao() {
        return (
            <div>
                <input type="text" defaultValue={this.props.item.nome} onChange={this.receberNovoInput} />
                <button type="text" className="btn" onClick={() => this.props.onUpdate(this.props.item)}>Editar</button>
            </div>
        )
    };

    //Método para renderizar um item da lsita
    renderDoItem() {
        return (
            <ul>
                <li onClick={() => { this.props.onEdit(this.props.item.id); }}>{this.props.item.nome} <span><button className="btn" onClick={() => this.props.onDelete(this.props.item.id)}>Deletar</button></span></li>
            </ul>
        );
    }

    //Atribui ao nome um novo valor.
    receberNovoInput = valor => {
        this.props.item.nome = valor.target.value;
    }

}

export default Lista;
