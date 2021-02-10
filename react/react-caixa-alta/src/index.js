
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
            <div className="pt-3">
                <Container>
                    <Col>
                        <InputGroup className="mb-3" onChange={this.handleEditInput}>
                            <FormControl />
                            <InputGroup.Append>
                                <Button variant="dark" onClick={this.handleSubmit}>Caixa Alta!</Button>
                            </InputGroup.Append>
                        </InputGroup>


                        <Card>
                            <Card.Header as="h5">Caixa Alta</Card.Header>
                            <Card.Body>{this.state.value}</Card.Body>
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