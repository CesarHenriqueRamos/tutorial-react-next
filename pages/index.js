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
          <style jsx>{`
              *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    margin: 0 auto;
    padding: 0 5%;
}
h1{
    background-color: #2979ff ;
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 30px;
}
div.conteudo{
    padding: 20px 20px;
}
li{
    margin-top: 40px;
    background-color: #ccc;
    border-radius: 10px;
    padding: 20px;
}
h2{
    padding: 20px 10px;
    color: #444;
}
p{
    padding: 10px;
    color: #666;
}`
        }  </style>
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
