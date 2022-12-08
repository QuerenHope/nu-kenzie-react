import { useState } from 'react'
import Lista from '../../components/lista'
import Form from '../../components/form'
import {FaTrashAlt} from 'react-icons/fa'

const Dashboard = ({setloginPage}) => {

    const [tarefas, settarefas] = useState([])
    const [filterProduts, setfilterProduts] = useState('')

    const valueTotal = tarefas.reduce(
        (a, b) => (b.tipo === "Saida" ? a - +b.valor : a + +b.valor),
        0);

    function filtroEntradas(){
            const filtro =  tarefas.filter((item) => item.tipo === "Entrada" && item)

            setfilterProduts(filtro)
    }

    function filtroSaidas(){
        const filtro =  tarefas.filter((item) => item.tipo === "Saida" && item)

        setfilterProduts(filtro)
}
    function todos(){
        setfilterProduts('')
    }
    function remover(i) {

        const remov = tarefas.filter((item,index)=> index !== i)

        setfilterProduts(remov)
    }

    
    return(
        <>
        
            <header className="cabecalho">
                <figure>
                    <img src="./assets/nuKenzie.png" alt="" />
                </figure>
                <button onClick={() => setloginPage(true)}  id='button_inicio'>Logout</button> 
            </header>

            <div className='container'>

                <Form tarefas={tarefas} settarefas = {settarefas}/>

                <div className='container_info'>
                    <div className='info'>
                    <div>
                    <span>Resumo financeiro</span>
                    </div>
                    <div className='buttons'>
                    <button id='todos' onClick={todos}>Todos</button>
                    <button id='entradas' onClick={filtroEntradas}>Entradas</button>
                    <button id='despesas' onClick={filtroSaidas}>Despesas</button>
                    </div>
                </div>
                <div className='container_list'>
                {
                    filterProduts === '' ? 
                    <Lista tarefas = {tarefas} settarefas={settarefas}/>
                    :
                    filterProduts.map((tarefas,index) => (
                    
                        <ul key={index} className='list'>
                            <li className='liCards'>
                                <h2>{tarefas.descricao}</h2>
                                <span>{tarefas.tipo}</span>
                                <p>{`R$ ${tarefas.valor}`}</p>
                                <button onClick={()=>remover(index)}><FaTrashAlt/></button>
                            </li>
                        </ul>
                        ))
                }
                    
                </div>
                </div>
            </div>
            
                <div className='valorTotal'>
                    <h2>Valor Total:</h2>
                    <p>{`R$ ${valueTotal}`}</p>                       
                </div>

            </>

    )
}

export default Dashboard