
import React from 'react'
import ReactDOM from 'react-dom'

class InputRender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleEditInput = this.handleEditInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleEditInput(evt) {
        this.setState({
            value: evt.target.value
        });
    }

    handleSubmit() {
        let data = this.state.value.toUpperCase();
        this.setState({
            value: data
        });
    }


    render() {
        return (
            <div>
                <input type="text" onChange={this.handleEditInput}></input>
                <button onClick={this.handleSubmit}>Caixa Alta!</button>
                <div>{this.state.value}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <InputRender />,
    document.getElementById('root')
);