import React, { Component } from 'react';
import Copy from '../Copy/Copy';
import './list.css';


class List extends Component {
    state = {
        //array de counters para nao fazer hard coding e copiar varias vezes no div.
        items: []
        //O componente que possui o pedaço do state, deve ser o que ira modifica-lo.
    };

    handleInputChange = value => {
        this.setState({ name: value.target.value });
        console.log(this.state.name);
    }


    handleClick = name => {
        this.state.items.push(name);
        this.setState({ name: this.state.items });
        console.log(name);
    }

    render() {
        return (
            <div className="field">

                <h1 className="title">Lista</h1>
                <input className="input" type="text" onChange={this.handleInputChange}></input>


                <button onClick={() => this.handleClick(this.state.name)}>Salvar</button>


                {this.state.items.map((item, index) =>
                    // passando atributo value como props para Counter
                    //props children: quando quero passarum props dentro do objeto entre as tags de abertura e fechamento
                    //key é usado internamento pelo react, por isso é melhor passar o objeto counter todo para qualquer adição de propriedade ser passada juntamente com todo o objeto
                    <Copy key={index} onAdd={this.handleClick} item={item} />)}
            </div>
        );
    }
}

export default List;

