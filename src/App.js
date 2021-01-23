
import React, {useState, useEffect} from 'react';
import './style/global.css'
import logo from './img/undraw_online_organizer_ofxm.svg'

export default function App(){

  
  const [itens, setItens] = useState([]);

  useEffect( ()=> {
    const btn = document.getElementById('btn-novo-item')

    itens.length >=10 ? btn.setAttribute('disabled', 'disabled') : btn.removeAttribute('disabled')

  }, [itens])



  function AdicionarItem(){
    const item = document.getElementById('input-item').value

    setItens([...itens,{id:Math.random, name:item}]);

    document.getElementById('input-item').value = "";
  }

  return(
    <>
      <main className="container">
        <h2>Checklist</h2>
        <h1>Adicione itens a sua checklist!</h1>
        <div className="lista">
          <ul>
            {itens.map(item => (
              <li key={item.id} className="item-lista">
                {item.name}
              </li>
            ))}

          </ul>
          <div className="itens">
            <img src={logo}></img>
            <div className="input-field">
              <input type={Text} className="input-field" id="input-item" placeholder="Ex: Estudar angular"></input>
              <div className="underline"></div>
            </div>
            <button onClick={() => AdicionarItem()} id="btn-novo-item">Adicionar</button>
          </div>
        </div>
      </main>
      </>
  );
}


