
import './Appbar.css';
import logo from "../../public/Devzando.png"
function AppBar() {

  const meu_nome = "</>" 

  return (
    
        <header className="topbar" >
          {/* <img src={logo} width="100px" height="100px"></img> */}
          <h1>{meu_nome}</h1>
          <ul id="lista">
            <l1>teste 1</l1>
            <l1>teste 2</l1>
            <l1>teste 3</l1>
          </ul>
        </header>
  
  );
}

export default AppBar;
