import clock from '../assets/icons/clock.svg'
import eye from '../assets/icons/eye.svg'
import dollarSign from '../assets/icons/dollar-sign.svg'
import check from '../assets/icons/check-circle.svg'

export default function Section() {
    return (
        <div className="section">
            <section>
                <h3>Creamos un producto sin comparacion</h3>
                <p>Confiable y diseñado para su uso diario</p>
            </section>
            <section>
                <img src={clock}/>
                <h4>Tiempo real</h4>
                <p>Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
            </section>
            <section>
            <img src={eye}/>
                <h4>No hay tasas escondidas</h4>
                <p>Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
            </section>
            <section>
                <img src={dollarSign}/>
                <h4>Compara monedas</h4>
                <p>No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.</p>
            </section>
            <section>
                <img src={check}/>
                <h4>Información confiable</h4>
                <p>Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
            </section>
        </div>
    )
}