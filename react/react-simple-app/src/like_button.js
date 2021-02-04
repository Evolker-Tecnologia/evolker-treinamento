//Com o modo estrito, você não pode, por exemplo, usar variáveis ​​não declaradas.
'use strict';

const e = React.createElement;

//primeiro componente React 
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        //contando apenas com recursos que são nativamentes suportados pelos navegadores. É por isso que usamos uma chamada de função JavaScript para informar ao React o que exibir:

        // Exibe um "Like" <button> também
        // return e(
        //     'button',
        //     { onClick: () => this.setState({ liked: true }) },
        //     'Like'
        //   );


        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton></LikeButton>, domContainer);