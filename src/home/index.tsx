import './styles.css'
import {ReactComponent as MainImage}   from './main.svg'
import Footer from '../footer';
import { Link } from 'react-router-dom';
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
                    <Link to="orders" className="home-btn-order">
                        Fazer Pedido
                    </Link>
                </div>
                <div className="home-image">
                    <MainImage/>

                </div>

            </div>
           
        </div>
        
    )

}

export default Home;