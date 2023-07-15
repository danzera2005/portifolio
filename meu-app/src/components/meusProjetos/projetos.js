import "./projetos.css";
import video from "../../public/video.mp4"
import js from "../../public/js.png"
import node from "../../public/node.png"
import mysql from "../../public/mysql.png"
import react from "../../public/react.png"
import firebase from "../../public/firebase.png"
import php from "../../public/php.png"
import windows from "../../public/windows.png"
import office from "../../public/office.png"

function MeusProjetos() {
  
    const projetos = [
        {
          "nome": "Gerenciador",
          "idade": 30,
          "tec1": js,
          "tec2": node
        },
        {
          "nome": "Maria",
          "idade": 25,
          "tec1": js,
          "tec2": node
        },
        {
          "nome": "Pedro",
          "idade": 28,
          "tec1": js,
          "tec2": node
        },
        {
          "nome": "Pedro",
          "idade": 28,
          "tec1": js,
          "tec2": firebase
        },
        {
          "nome": "Pedro",
          "idade": 28,
          "tec1": js,
          "tec2": node
        },
        {
          "nome": "Pedro",
          "idade": 28,
          "tec1": js,
          "tec2": mysql
        }
      ];
      

  return (
    <div>
      {/* <h1 id="titulo">Meus projetos</h1> */}
      <div id="container-projetos">
        {projetos.map((item, i) => {
          return (
            <div id="container" key={i}>
               <h1>{item.nome}</h1>

              <video id="video" width="150" height="150" controls>
                <source src={video} type="video/mp4"/>
                  Seu navegador não suporta o elemento de vídeo.
              </video>

              <img src={item.tec1} width="40px" height="40px" id="tec-usadas"></img>
              <img src={item.tec2} width="40px" height="40px" id="tec-usadas2"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MeusProjetos;
