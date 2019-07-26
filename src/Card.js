import React from 'react';
import './Card.css';

//Componentes
import Titulo from './componentes/Titulo';
import Subtitulo from './componentes/Subtitulo';
import Tipo from './componentes/Tipo';
import LocalLei from './componentes/LocalLei';
import Aprovado from './componentes/Aprovado';
import Captado from './componentes/Captado';
import Porcentagem from './componentes/Porcentagem';
import Empresa from './componentes/Empresa';
import Projetos from './componentes/Projetos';

//Imagens
import home from './imgs/home.png';
import increase from './imgs/increase.png';
import research from './imgs/research.png';

//API
import axios from 'axios';



class Card extends React.Component {
    state = {
        nomeTitulo: null,
        nomeSubtitulo: null,
        nomeTipo: null,
        estadoTitulo: null,
        municipioTitulo: null,
        valorAprovado: null,
        valorCaptado: null,
        empresaNome: null,
        porcentagem: null
      }
    
      getProjeto = (e) => {
        e.preventDefault();
    
        const projeto = e.target.elements.nomeProjeto.value;
        
        axios.get(`http://api.salic.cultura.gov.br/v1/projetos/${projeto}?format=json`)
          .then((res) => {
            const nomeTitulo = res.data.nome;
            this.setState({ nomeTitulo })
    
            const nomeSubtitulo = res.data.segmento;
            this.setState({ nomeSubtitulo})
    
            const nomeTipo = res.data.area;
            this.setState({ nomeTipo})
    
            const estadoTitulo = res.data.UF;
            this.setState({ estadoTitulo})
    
            const municipioTitulo = res.data.municipio;
            this.setState({ municipioTitulo})
    
            const valorAprovado = res.data.valor_aprovado;
            this.setState({ valorAprovado})
    
            const valorCaptado = res.data.valor_captado;
            this.setState({ valorCaptado})
    
            const empresaNome = res.data.proponente;
            this.setState({ empresaNome})

            const porcentagem = res.data.valor_captado/res.data.valor_aprovado;
            this.setState({ porcentagem})
    
    
          })
      }
    render () {
      return (
          <section className="card container">

            <div className="alinha">
            <p className="projetos-culturais">Projetos culturais incentivados pelo Ministério da Cultura (MINC)</p>
            <p className="numero-pronac">Digite o número PRONAC do projeto:</p>
            <Projetos getProjeto={this.getProjeto}/>
            </div>

          <div className="borda">
            <div className="sub-card">
              <Titulo titulo={this.state.nomeTitulo}/>
            </div>
  
            <div className="container">
              <Subtitulo subtitulo={this.state.nomeSubtitulo}/>
              <Tipo tipo={this.state.nomeTipo}/>
              <LocalLei local={this.state.municipioTitulo} sublocal={this.state.estadoTitulo} lei="ROANEUT - Artigo 18"/>
  
              <Aprovado aprovado={this.state.valorAprovado}/>
              <Captado captado={this.state.valorCaptado}/>
              <Porcentagem porcentagem={this.state.porcentagem}/>
  
              <Empresa empresa={this.state.empresaNome}/>
  
            <div className="icones">
              <img className="icones-img" src={increase} alt="Ícone para aumentar tamanho da tela"></img>
              <img className="icones-img" src={research} alt="Ícone para buscar"></img>
              <img className="icones-img" src={home} alt="Ícone de uma casa para ir para página inicial"></img>
              <button className="icones-button">Me escolhe :D</button>
            </div>
          </div>
        </div>
        
        <footer className="creditos">
        <small>Icons by <a className="creditos-link" href="https://www.flaticon.com/">flaticon</a></small>
        </footer>
        
        </section>
      )
    }
  }
  
  
  export default Card;
  