import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar/Appbar';
import Outdoor from './components/Outdoor/outdoor';
import MeusProjetos from './components/meusProjetos/projetos';
import js from "./public/js.png"
import node from "./public/node.png"
import mysql from "./public/mysql.png"
import react from "./public/react.png"
import firebase from "./public/firebase.png"
import php from "./public/php.png"
import windows from "./public/windows.png"
import office from "./public/office.png"

function App() {

  const meu_nome = "Danilo" 

  return (
    <div className="App">
      <AppBar/>
      <div>
        <Outdoor/>
        <div id="container-grafite">
          <div className='itens'><img src={js} className='imagens'></img></div>
          <div className='itens'><img src={node} className='imagens'></img></div>
          <div className='itens'><img src={mysql} className='imagens'></img></div>
          <div className='itens'><img src={react} className='imagens'></img></div>
          <div className='itens'><img src={firebase} className='imagens'></img></div>
          <div className='itens'><img src={php} className='imagens'></img></div>
          <div className='itens'><img src={windows} className='imagens'></img></div>
          <div className='itens'><img src={office} className='imagens'></img></div>
        </div>
      </div>

      <MeusProjetos/>

    </div>
  );
}

export default App;
