import './styles.css'
import {ReactComponent as MainImage}   from './main.svg'
function Home() {

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-action">
                    <h1 className="home-title">
                        Faça de pedido <br /> Que entregamos <br /> para você!!!
                    </h1>
                    <h3 className="home-subtitle">
                        Escolha o seu pedido em poucos minutos <br />
                        levaremos até você.
                    </h3>
                    <a  href="orders" className="home-btn-order">
                        Fazer Pedido
                    </a>
                </div>
                <div className="home-image">
                    <MainImage/>

                </div>
            </div>
        </div>
    )

}

export default Home;