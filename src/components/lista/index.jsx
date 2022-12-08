import {FaTrashAlt} from 'react-icons/fa'

const Lista = ({tarefas, settarefas}) => {

    function remover(i) {

        const remov = tarefas.filter((item,index)=> index !== i)

        settarefas(remov)
    }

    return(
        <>
            {
                tarefas.map((tarefas,index) => (
                    
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
        </>
        
    )
}

export default Lista