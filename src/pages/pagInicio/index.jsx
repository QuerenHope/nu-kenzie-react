import './style.css'

const Paginicial = ({setloginPage}) => {
    return(
            <div className="modal">
                <div className='container_pagincial'>
                    <div className='info_inicial'>
                        <img src="./assets/logoBranca.png" alt="logo" />
                        <h1>Centralize o controle das suas finanças</h1>
                        <p>de forma rápida e segura</p>
                        <button onClick={ () => setloginPage(false)}>Iniciar</button>              
                    </div>
                    <div className='div_img'>
                        <img src="./assets/image.png" alt="" />
                    </div>
                </div>   
            </div>
    )
}

export default Paginicial