
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer'

function App() {
  
  const [times,setTimes] = useState( [
    {
      id: uuidv4(),
      favorito: false,
      nome:'Programação',
      cor:'#D9F7E9'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Front-End',
      cor:'#E8F8FF'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Data Science',
      cor:'#F0F8E2'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Devops',
      cor:'#FDE7E8'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Ux e Design',
      cor:'#FAE9F5'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Mobile',
      cor:'#FFF5D9'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Inovação e gestão',
      cor:'#FFEEDF'
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome:'Tarciana',
      cargo: 'Desenvolvedora',
      imagem: 'https://github.com/tarciana23.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome:'Emerson',
      cargo: 'Analista',
      imagem: 'https://github.com/EmersonLima1.png',
      time: times[1].nome
    },
  ]
  
  const[colaboradores,setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    //debugger
    setColaboradores([...colaboradores,colaborador])//espalhando (...)os colaboradores antigos e adicionando um novo 
  }

  function deletarColaborador(id){
    console.log('cheguei',id)
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor,id){
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime){
    //primeiro o array de times e dps um objeto contendo
    //o nome do novo time e a cor, por isso as chaves
    setTimes([...times,{...novoTime, id:uuidv4()}])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador =>{
      if(colaborador.id == id)colaborador.favorito =!colaborador.favorito
      return colaborador
    }))
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario 
        cadastrarTime ={cadastrarTime}
        times = {times.map(time =>time.nome)} 
        aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map((time,indice) => 
        <Time
          aoFavoritar={resolverFavorito}
          mudarCor = {mudarCorDoTime}
          key={indice}
          time={time}
          colaboradores =  {colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar = {deletarColaborador}
        />
      )}
      <Footer/>
   </div>
  );
}

export default App;
