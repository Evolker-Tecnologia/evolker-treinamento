//Componente filho do ControladorLista (controlador.jsx).
//Este componente renderiza uma lista e notifica mudanças.
//Ele existe caso futuramente quisermos remover ou alterar um item da lista.
//Este componente não possui state e ele passa a ser um (controlled component) componente controlado pelo componente pai. Ele recebe todos os dadaos por props e chama eventos quando os dados precisarem ser modificados.

//props: inclui dados que mandamos de um componente para outro. Props são apenas para o outro componente ler as propriedades do componente que está passando, não é possível mudar um props dentro do outro componente que está a acessá-lo.
//state: inclui dados que é local (interno) ou privado daquele componente (outros componentes não podem acessar esse state, os dados sao passados através dos props).

import React, { Component } from 'react';
import './lista.css';


class Lista extends Component {
    //renderiza a lista de itens gerada pelo controlador.jsx
    //render é um método padrão do React para renderizar (mostrar no DOM).
    render() {
        return (
            <div className="list">
                <ul>
                    {/* Recebe o item da lista através dos props (propriedade - (item={item})) */}
                    <li>{this.props.item.nome} <span><button className="btn" onClick={() => this.props.onDelete(this.props.item.id)}>Deletar</button></span></li>


                    <span><button className="btn" onClick={() => this.props.onEdit(this.props.item)}>Editar</button></span>
                </ul>
            </div>
        );
    }
}

export default Lista;
