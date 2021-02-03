var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Componente filho do ControladorLista (controlador.jsx).
//Este componente renderiza uma lista, executa métodos internos e notifica mudanças.
//Este componente não possui state e ele passa a ser um (controlled component) componente controlado pelo componente pai. Ele recebe todos os dadaos por props e chama eventos quando os dados precisarem ser modificados.

//props: inclui dados que mandamos de um componente para outro. Props são apenas para o outro componente ler as propriedades do componente que está passando, não é possível mudar um props dentro do outro componente que está a acessá-lo.
//state: inclui dados que é local (interno) ou privado daquele componente (outros componentes não podem acessar esse state, os dados sao passados através dos props).

import React, { Component } from 'react';
import './lista.css';

var Lista = function (_Component) {
    _inherits(Lista, _Component);

    function Lista() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Lista);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lista.__proto__ || Object.getPrototypeOf(Lista)).call.apply(_ref, [this].concat(args))), _this), _this.receberNovoInput = function (valor) {
            _this.props.item.nome = valor.target.value;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Lista, [{
        key: 'render',

        //renderiza a lista de itens gerada pelo controlador.jsx
        //render é um método padrão do React para renderizar (mostrar no DOM).
        value: function render() {
            //variável que busca a propriedade modificado de um item
            var modificado = this.props.item.modificado;
            return React.createElement(
                'div',
                { className: 'list' },
                React.createElement(
                    'section',
                    null,
                    modificado ? this.inputDeEdicao() : this.renderDoItem()
                )
            );
        }

        // Método para renderizar um input e um botão de editar 

    }, {
        key: 'inputDeEdicao',
        value: function inputDeEdicao() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement('input', { type: 'text', defaultValue: this.props.item.nome, onChange: this.receberNovoInput }),
                React.createElement(
                    'button',
                    { type: 'text', className: 'btn', onClick: function onClick() {
                            return _this2.props.onUpdate(_this2.props.item);
                        } },
                    'Editar'
                )
            );
        }
    }, {
        key: 'renderDoItem',


        //Método para renderizar um item da lsita
        value: function renderDoItem() {
            var _this3 = this;

            return React.createElement(
                'ul',
                null,
                React.createElement(
                    'li',
                    { onClick: function onClick() {
                            _this3.props.onEdit(_this3.props.item.id);
                        } },
                    this.props.item.nome,
                    ' ',
                    React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'button',
                            { className: 'btn', onClick: function onClick() {
                                    return _this3.props.onDelete(_this3.props.item.id);
                                } },
                            'Deletar'
                        )
                    )
                )
            );
        }

        //Atribui ao nome um novo valor.

    }]);

    return Lista;
}(Component);

export default Lista;