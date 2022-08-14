import "../styles/social-proof.scss"

import depoimento01 from "../assets/depoimento1.jpg"
import depoimento02 from "../assets/depoimento2.jpg"


export function SocialProof() {
    return (
        <section id="social-proof">
            <div className="container">                    
                <h2>Depoimentos de quem comprou</h2>
                <div className="wrapper">
                    <img src={depoimento01} alt="" />
                    <img src={depoimento02} alt="" />
                    <img src={depoimento01} alt="" />
                    <img src={depoimento02} alt="" />
                </div>
            </div>
        </section>
    )
}