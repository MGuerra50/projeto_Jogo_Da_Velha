import './placar.css';

const Placar = (props) => {

    return (
        <div className='players'>
            <div className='primeiraLinha'>
                <section className='secao1'>
                    <div className='placar1'>
                        {props.jogadores[0].placarIndividual}
                    </div>
                </section>
                <section className='secao2'>
                    
                </section>
                <section className='secao3'>
                    <div className='placar2'>
                        {props.jogadores[1].placarIndividual}
                    </div>
                </section>
            </div>
            <div className='placar'>
                <section className='marcador1'>
                    {props.jogadores[0].marcador}
                </section>
                <section className='jogador1'>
                    {props.jogadores[0].nickname}
                </section>
                <section className='divisoria1'>
                    
                </section>
                <section className='divisoria2'>
                    
                </section>
                <section className='jogador2'>
                    {props.jogadores[1].nickname}
                </section>
                <section className='marcador2'>
                    {props.jogadores[1].marcador}
                </section>
            </div>
        </div>
    );
}

export default Placar;