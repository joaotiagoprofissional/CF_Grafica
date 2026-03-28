import { Links } from '../links/Links'

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import './footer.css'

export function Footer(){

    function getZapLink(){
        const message = "Olá, vim pelo site e gostaria de um orçamento!"
        return `https://wa.me/5521972094571?text=${encodeURIComponent(message)}`
    }

    return(
        <>
            <div className="container-footer">
                <a href="#"><img src='../../../public/images/logo_branca.png' alt="" /></a>
                <nav>
                    <ul className='menu-footer'>
                        {Links.map((link)=>(
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="social-medias">
                    <a href="https://www.instagram.com/cfservicosgraficos/" target='_blank' ><FaInstagram /></a>
                    <a href="https://www.facebook.com/search/top/?q=cf%20servi%C3%A7os%20gr%C3%A1ficos&locale=pt_BR" target='_blank'><FaFacebookF /></a>
                    <a href={getZapLink()} target='_blank'><FaWhatsapp /></a>
                </div>
                <div className="maps">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6035577188622!2d-43.287668727453585!3d-22.89109879146449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dad176e8ef1%3A0xddebbe4776f5156b!2sCF%20Servi%C3%A7os%20Gr%C3%A1ficos!5e0!3m2!1spt-BR!2sbr!4v1774737076391!5m2!1spt-BR!2sbr"
                        width="200"
                        height="200"
                        style={{border: 0}}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >   
                    </iframe>
                    <a href="https://maps.app.goo.gl/U9gkb6fEEzRsfLLfA"
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                        Ver no Google Maps
                    </a>
                </div>
            </div>
            <div className="color-graphics">
                <div className="footer-ciano"></div>
                <div className="footer-magenta"></div>
                <div className="footer-amarelo"></div>
                <div className="footer-preto"></div>
            </div>
        </>
    )
}