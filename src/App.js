import './App.css';
import { useEffect, useState } from 'react';
import CampoDeJogo from "./componente/campoDeJogo";
import Cabecalho from './componente/cabecalho';
import Placar from './componente/placar';

const listaJogadas = [];
function App() {
  
  const campoJogavel = [
    {
      valor: '',
      id: '1' 
    },{
      valor: '',
      id: '2'
    },{
      valor: '',
      id: '3'
    },{
      valor: '',
      id: '4'
    },{
      valor: '',
      id: '5'
    },{
      valor: '',
      id: '6'
    },{ 
      valor: '',
      id: '7'
    },{
      valor: '',
      id: '8'
    },{
      valor: '',
      id: '9'
    }
  ];
  const [casa, setCasa] = useState(campoJogavel);

  const playersDoJogo = [
    {
      id: 1,
      nickname: 'Jogador 1',
      marcador: 'X',
      corTema: 'default',
      placarIndividual: 0
    },{
      id: 2,
      nickname: 'Jogador 2',
      marcador: 'O',
      corTema: 'default',
      placarIndividual: 0
    }
  ];
  const [player, setPlayer] = useState(playersDoJogo);

  
  function marcadorAtual(marcador = "X"){
    if(listaJogadas.length === 0){
      return marcador;
    } else {
      const jogadaAnterior = listaJogadas.slice(-1).reduce(e=>e).valor;
      const jogadaAtual = jogadaAnterior === 'X' ? 'O' : 'X';
      return jogadaAtual;
    }
  }

  function registrarJogada (jogada){
    if(listaJogadas.length===0){
      listaJogadas.push({valor: jogada});
    }else{
      const ultimaJogada = listaJogadas[listaJogadas.length-1].valor;
      if(ultimaJogada!==jogada){
      listaJogadas.push({valor: jogada});     
      }
    }
  }

  /*TESTE - 001*/ const [cont, setCont] = useState({});

  function aoClicar(id){ 
    const marcador = marcadorAtual();
    if(casa[id-1].valor === ''){

      setCont(contAntigo=>{
        console.log('Estou dentro do SetCont')
        return {
          idAtual: id,
          contador: contAntigo.contador + 1
      };
      });


/* ESTÁ FUNCIONANDO - 001 *//*      setCasa((casaAntiga) => {
        const novaCasa = [...casaAntiga];
        novaCasa[id - 1] = { ...novaCasa[id - 1], valor: marcador };
        registrarJogada(marcador);
        verificaCampeao(novaCasa);
        return novaCasa;
      });*/
    }
  }


/* teste - 001 */ useEffect(()=>{
  const marcador = marcadorAtual();
  setCasa((casaAntiga) => {
    const novaCasa = [...casaAntiga];
    novaCasa[cont.idAtual - 1] = { ...novaCasa[cont.idAtual - 1], valor: marcador };
    registrarJogada(marcador);
    verificaCampeao(novaCasa);
    return novaCasa;
  });
}, [cont]);


  function verificaCampeao(jogadasDaPartida){

    const linhas = [
      [jogadasDaPartida[0], jogadasDaPartida[1], jogadasDaPartida[2]],
      [jogadasDaPartida[3], jogadasDaPartida[4], jogadasDaPartida[5]],
      [jogadasDaPartida[6], jogadasDaPartida[7], jogadasDaPartida[8]]
    ];
    const colunas = [
      [jogadasDaPartida[0], jogadasDaPartida[3], jogadasDaPartida[6]],
      [jogadasDaPartida[1], jogadasDaPartida[4], jogadasDaPartida[7]],
      [jogadasDaPartida[2], jogadasDaPartida[5], jogadasDaPartida[8]]
    ];
    const diagonais = [
      [jogadasDaPartida[0], jogadasDaPartida[4], jogadasDaPartida[8]],
      [jogadasDaPartida[2], jogadasDaPartida[4], jogadasDaPartida[6]]
    ];
  
    const verificandoCampeao = [...linhas, ...colunas, ...diagonais];
    let campeaoDaPartida = [];
    verificandoCampeao.forEach((lista)=>{
      if(lista.every((elementoLista)=>elementoLista.valor === lista[0].valor && lista[0].valor !== '')){
        campeaoDaPartida.push(...lista)
      }
    })
    if(campeaoDaPartida.length===3){
      exibeCampeao(campeaoDaPartida)
    }
    
    return;
  }

  function exibeCampeao(campeao){
    console.log(playersDoJogo);
    const playerParaAtualizar = campeao[0].valor === playersDoJogo[0].marcador? 0 : 1;
    setPlayer(()=>{
      const novoPlacar = [...playersDoJogo];
      novoPlacar[playerParaAtualizar].placarIndividual += 1; //corrigir CHAMADAS ADICIonais do clique e que contabilizam vários pontos!/
      return novoPlacar;
    });

    console.log('CAMPEÃO:  ', campeao,' 🔸');
  }


  return (
    <div className="App">
      <header className="App-header">
        <Cabecalho/>
        <CampoDeJogo verifica = {verificaCampeao} tabuleiro = {casa} aoClicar = {aoClicar}/>
        <Placar jogadores = {player}/>
      </header>
    </div>
  );
}

export default App;
