import React, { Component } from 'react';
import './copy.css';


class Copy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // recebendo props que foi definido em counters
            item: this.props.item
        }
        //nova instancia do this.handleIncrement para poder ter acesso ao this.state.name
    }


    render() {
        return (
            <div className="list">
                <ul>
                    <li>{this.state.item}</li>
                </ul>

            </div>
        );
    }
}

export default Copy;
