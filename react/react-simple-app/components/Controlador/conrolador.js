//Componente pai, modifica dados e compartilha seus props.
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Lista from '../Lista/lista';
import './controlador.css';

//Props: dados que mandamos de um componente para outro. Props são apenas para o outro componente ler as propriedades do componente que está a passar, não é possível mudar um props dentro do outro componente que está a acessá-lo.
//State: dados que é local ou privado daquele componente. (outros componentes não podem acessar esse state, os dados são passados através dos props).


var ControladorLista = function (_Component) {
    _inherits(ControladorLista, _Component);

    function ControladorLista() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ControladorLista);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ControladorLista.__proto__ || Object.getPrototypeOf(ControladorLista)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            itens: []
        }, _this.receberInputeSubstituir = function (valor) {
            //Ao substituir o state do componente com setState, cria-se as propriedades nome(com o nome atual do input), id(através da função NewDate) e modificado: false e atribui o novo state o valor atual do target que é recebido através do input (com a função Onchange).
            _this.setState({ nome: valor.target.value });
        }, _this.adicionarItemNaLista = function (item) {
            //Enviar o nome e o id para o array de itens
            _this.state.itens.push(item);
            //Atualizar o nome anterior. (que foi criado na função receberInputeSubstituir).
            _this.setState({ itens: _this.state.itens });
            // console.log(name);
        }, _this.deletarItem = function (itemId) {
            //Atualiza o itens sem o objeto deletado.
            var itens = _this.state.itens.filter(function (i) {
                return i.id !== itemId;
            });
            //Atualizo as propriedades do array de itens.
            _this.setState({ itens: itens });
        }, _this.editarItem = function (itemId) {
            //buscar o item baseado no id recebido.
            var item = _this.state.itens.find(function (i) {
                return i.id === itemId;
            });
            //A propriedade modificado deverá ser true para mostrar o input da edição.
            item.modificado = true;
            //Atualizo as propriedades do array de itens.
            _this.setState({ itens: _this.state.itens });
        }, _this.atualizarItem = function (itemAtualizado) {
            //(item) está com o valor anterior, estou bucando o item baseado no id do item atualizado.
            var item = _this.state.itens.find(function (i) {
                return i.id === itemAtualizado.id;
            });
            //Com o elemento que tenho descobri qual era o index desse item dentro do array de itens
            var index = _this.state.itens.indexOf(item);

            //A propriedade modificado deverá ser sempre false para que esconda o input de edição
            itemAtualizado.modificado = false;

            var copyArray = [].concat(_toConsumableArray(_this.state.itens));
            //Substitui o item antereior de index X pelo item atualizado.
            if (index > -1) {
                copyArray[index] = itemAtualizado;
            }

            //Atualizo as propriedades do array de itens.
            _this.setState({ itens: copyArray });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    //Esse state é interno e privado, o componente <Lista> não tem acesso a este state, seus valores são passados através dos props.


    //Função para quando clicar no botão salvar, atualizar a propriedade item com um novo id (gerado automaticamente) e o nome do imput


    //Método para deletar um item


    //Método para editar um tem da lista


    //Método para atualizar o item atual


    _createClass(ControladorLista, [{
        key: 'render',


        //render() é um método padrão do React para renderizar (mostrar no DOM).
        value: function render() {
            var _this2 = this;

            return (
                //Os elementos dentro do return devem sempre estar entre <div></div> ou <React.Fragment>
                React.createElement(
                    'div',
                    { className: 'field' },
                    React.createElement(
                        'h1',
                        { className: 'title' },
                        'Lista'
                    ),
                    React.createElement('input', { className: 'input', type: 'text', onChange: this.receberInputeSubstituir }),
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this2.adicionarItemNaLista({ id: new Date().getMilliseconds(), nome: _this2.state.nome, modificado: false });
                            } },
                        'Adicionar'
                    ),
                    this.state.itens.map(function (item, index) {
                        return (
                            //A propriedade key é usado internamente pelo React
                            React.createElement(Lista, { key: index, onAdd: _this2.adicionarItemNaLista, onDelete: _this2.deletarItem, onEdit: _this2.editarItem, onUpdate: _this2.atualizarItem, item: item })
                        );
                    })
                )
            );
        }
    }]);

    return ControladorLista;
}(Component);

export default ControladorLista;

var domContainer = document.querySelector('#container');

ReactDOM.render(ControladorLista, domContainer);