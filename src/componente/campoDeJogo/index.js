import './campoDeJogo.css';

const CampoDeJogo = ({verifica, tabuleiro, aoClicar})=>{

    function idCasaTabuleiro (objeto){
        const id = objeto.id;
        return `${id}`;
    }

    return (
        <div className='fundo'>
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
    );
}

export default CampoDeJogo;