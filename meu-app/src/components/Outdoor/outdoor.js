import './outdoor.css'
import {useState} from 'react'

function Outdoor(){

    const [values,setValues] = useState()

    function pegarValores(){
        
    }

    function teste(){
        alert("clicou")
    }

    return(
        <div id="outdoor">
            <div id="itens">
                <h1>Precisa de uma solução inteligente?</h1>
                <h5><strong>Te apresento meus projetos,</strong> caso tenha interesse contate-me clicando no botão<br/>
                style tab on the right side of designer</h5>
                <button id="btn_1"onClick={teste}>Gostaria de conhecer melhor o seu trabalho!</button>
            </div>

            <div id="formulario">
                
                <form type="post">
                    
                    <input handleChange ={pegarValores} placeholder='Nome' required type='text'></input><br/>
                    <input placeholder='Email' required type='email'></input><br/>
                    <button type="submit" id="btn_enviar">Enviar</button>
                </form>
            </div>
        </div>
    )

}

export default Outdoor