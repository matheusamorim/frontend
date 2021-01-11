import './styles.css'
import { ReactComponent as YoutubeIcon} from './youtube.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';


function  Footer(){

    return( 
      <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className="footer-icons">
            <a href="www.google.com" target="_new"> 
            <YoutubeIcon/>
            </a>
            <a href="www.google.com" target="_new"> </a>
            <LinkedinIcon/>
            <a href="www.google.com" target="_new"> </a>
            <InstagramIcon/>
        </div>
      </footer>
      
    )
    
}

export default Footer;