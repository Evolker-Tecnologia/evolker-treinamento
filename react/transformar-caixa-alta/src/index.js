
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


class InputRender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            texto: ''
        };
        this.transformarEmCaixaAlta = this.transformarEmCaixaAlta.bind(this);
    }



    transformarEmCaixaAlta(evt) {
        this.setState({
            texto: evt.target.value.toUpperCase()
        });
    }

    render() {
        return (
            <div className="pt-3">
                <Container>
                    <Col>
                        <InputGroup className="mb-3" onChange={this.transformarEmCaixaAlta}>
                            <FormControl />
                        </InputGroup>


                        <Card>
                            <Card.Header as="h5">Caixa Alta</Card.Header>
                            <Card.Body>{this.state.texto}</Card.Body>
                        </Card>
                    </Col>
                </Container>
            </div>
        )
    }
}

ReactDOM.render(
    <InputRender />,
    document.getElementById('root')
);