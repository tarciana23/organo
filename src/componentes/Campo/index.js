
import './Campo.css'

const Campo = ({obrigatorio =false, aoAlterado,valor,placeholder,label,type='text'}) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento)=>{
        aoAlterado(evento.target.value)
    }

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type} 
                required={obrigatorio} 
                placeholder ={placeholderModificada}
                onChange={aoDigitado}
                value={valor}/>
        </div>
    )
}

export default Campo;