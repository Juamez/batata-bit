import bitcoinImg from '../assets/imgs/bitcoin.svg'


const Main = () => {
    return (
        <main className='App-main'>
            <figure className='div-img'>
                <img src={bitcoinImg}/>
            </figure>
            <h2>Visibilizamos todas las tasas de cambio.</h2>
            <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
            <div className='table-container'>
                <h4>Monedas</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Bitcoin</td>
                            <td>$ 1.96 <span></span> </td>
                        </tr>
                        <tr>
                            <td>Ethereum</td>
                            <td>$ 0.07 <span></span> </td>
                        </tr>
                        <tr>
                            <td>Ripple</td>
                            <td>$ 2.15 <span></span></td>
                        </tr>
                        <tr>
                            <td>Stellar</td>
                            <td>$ 4.96 <span></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Actualizado: 19 Julio 23:45</p>
        </main>
    )
    
}

export default Main