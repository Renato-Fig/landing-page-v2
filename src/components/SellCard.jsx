import "../styles/sell-card.scss"

import { FaStar } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

export function SellCard() {
    return (
        <section id="sell-card">
            <div className="container">
                <div className="content">
                    <h1>Destrinchando <br/>a Matemática</h1>
                    <ul>
                        <li>
                            <span><FaStar/></span> 
                            100 comentários de questões explicados de forma leve e dinâmica.
                            </li>
                        <li>
                            <span><FaStar/></span>
                            Todas as fórmulas explicadas com exemplos.
                        </li>
                        <li>
                            <span><FaStar/></span>
                            +200 páginas de conteúdo focado para Enem.
                        </li>
                    </ul>
                    <p>De <del>R$ 49,90</del><br/> Por apenas <br/> <em> R$ 36,90</em></p>
                    <a href="">Comprar agora</a>
                    <p>Compra 100% segura pelo sistema Hotmart. Aceitamos as seguintes formas de pagamento:</p>

                    <ul id="pay-forms">
                        <span><FaCcMastercard /></span>
                        <span><FaCcPaypal /></span>
                        <span><FaCcVisa /></span>
                        <span><FaCcAmex /></span>
                        <span><FaCcDinersClub /></span>
                        <span><FaGooglePay /></span>
                    </ul>
                </div>                    
            </div>
        </section>
    )
}