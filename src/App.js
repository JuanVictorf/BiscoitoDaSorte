/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import './estilo.css';
import './index.css'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: "",
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Viva o momento, aproveite as oportunidades.',
    'Você é mais forte do que imagina.',
    'Acredite em si mesmo e conquiste seus sonhos.',
    'A vida é uma jornada cheia de surpresas e aprendizados.',
    'Sua criatividade é uma fonte infinita de possibilidades.',
    'Sorria, contagie o mundo com sua alegria.',
    'A gratidão transforma pequenos gestos em grandes momentos.',
    'Acredite que você consegue!']
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render(){
    return (
      <div className="container">
        <h1>Biscoito da sorte</h1>
        <img src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  };
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
