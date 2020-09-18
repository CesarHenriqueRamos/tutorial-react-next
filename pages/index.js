import React, { Component } from 'react';

import api from '../pages/api';

class App extends Component{
  state = {
    artigos : [],
  }
  async componentDidMount(){
    const response = await api.get('/artigo');
    this.setState({artigos:response.data})
  }
  render(){
    const {artigos} = this.state;
    console.log(artigos);
    return(
      <div>
        <h1>Lista de Artigos</h1>
        <div className="conteudo">
          <ul style={{listStyleType:"none"}} className="container">
            {artigos.map(artigo =>(
              <li key={artigo._id}>
                <h2>Titulo: {artigo.titulo}</h2>
                <p>{artigo.conteudo}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
