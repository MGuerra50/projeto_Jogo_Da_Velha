import { TbReload } from 'react-icons/tb'
import './campoDeJogo.css';

const CampoDeJogo = ({reiniciar, tabuleiro, aoClicar})=>{

    function idCasaTabuleiro (objeto){
        const id = objeto.id;
        return `${id}`;
    }

    return (
        <div className='fundo'>

            <div className='base'>
                <div className='tabuleiro'>
                    <section className='casaDoTabuleiro'>
                        {tabuleiro.map(casaTabuleiro=><div 
                            key={idCasaTabuleiro(casaTabuleiro)}
                            onClick={()=>{
                                return aoClicar(idCasaTabuleiro(casaTabuleiro))
                            }}
                            className='celula'>
                                {`${casaTabuleiro.valor}`}
                            </div>)}
                    </section>
                </div>
            </div>
                <section className='botoes'>
                    <TbReload className = 'reiniciar' onClick = {()=>reiniciar()}/> 
                </section>
        </div>
    );
}

export default CampoDeJogo;