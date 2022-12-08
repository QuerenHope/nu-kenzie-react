import { useState } from 'react'

const Form = ({tarefas,settarefas}) => {

    const [descricao, setdescricao] = useState('')
    const [valor, setvalor] = useState('')
    const [tipo, settipo] = useState('')

    

    function handleSubmit(event) {
        event.preventDefault()
        
        settarefas((oldtarefas) => [...oldtarefas,{
            descricao, valor, tipo }] )
    }

    return(
                <form onSubmit={handleSubmit}>
                    <label className='descricao'>Descriçao</label>
                    <input 
                        id='input_descricao' 
                        type="text" 
                        placeholder='Digite aqui sua descrição'
                    onChange={event=> setdescricao(event.target.value)}
                         />
                    <p>Ex: Compra de roupas</p>
                    <div className='container_valor'>
                        <div id='div_valor'>
                        <label className='valor'>Valor</label>
                        <input 
                            className='input_valor' 
                            type="number" 
                            placeholder='R$'
                            onChange={event=> setvalor(event.target.value)} />
                        </div>
                        <div id='div_tipo'>
                        <label>Tipo de Valor</label>
                        <select 
                            name="tipoValor" 
                            id="tipoValor" 
                            onChange={event=> settipo(event.target.value)}>
                            <option value="Escolha">Escolha um Valor</option>
                            <option value="Entrada">Entrada</option>
                            <option value="Saida">Saída</option>
                        </select>
                        </div>
                    </div>
                    <button type='submit' id='inserir'>Inserir Valor</button>
                </form>
    )
}

export default Form