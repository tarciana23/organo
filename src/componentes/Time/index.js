import Colaborador from '../Colaborador'
import './Time.css'

import hexToRgba from 'hex-to-rgba'



const Time = ({time,colaboradores,aoDeletar,mudarCor,aoFavoritar})=>{

    return(
    //se tiver algum colaborador ele irá exibir a section
      (colaboradores.length >0) ? <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)',backgroundColor:hexToRgba(time.cor,'0.6')}}>
           <input type='color'
                onChange={evento => mudarCor(evento.target.value,time.id)}
                className='input-cor'/>
            <h3 style={{borderColor:time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
            {colaboradores.map((colaborador,indice)=>
            {
                return <Colaborador 
                    key ={indice}
                    colaborador = {colaborador}
                    corDeFundo = {time.cor}
                    aoDeletar = {aoDeletar}
                    aoFavoritar={aoFavoritar}
                />
            })}
            </div>
        </section>
        : ''
    )
}
export default Time