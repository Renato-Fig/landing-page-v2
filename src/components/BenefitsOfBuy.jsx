import "../styles/benefits-of-buy.scss"

import iconCalculator from "../assets/icon-calculator.svg"
import iconChart from "../assets/icon-chart.svg"
import iconTask from "../assets/icon-task.svg"
import iconFile from "../assets/icon-file.svg"

export function BenefitsOfBuy() {
    return (
        <section id="benefits-of-buy">
            <div className="container">                    
                <h2>Com esta apostila você terá acesso à</h2>
                <div className="wrapper">
                    <div className="content">
                        <img src={iconTask} alt="icone de lista" />
                        <p>As principais questões de matemática do ENEM resolvidas e explicadas passo-a-passo.</p>
                    </div>
                    <div className="content">
                        <img src={iconCalculator} alt="icone de calculadora" />
                        <p>Todas as fórmulas de matemática explicadas e exemplificadas.</p>
                    </div>
                    <div className="content">
                        <img src={iconChart} alt="icone de estatística" />
                        <p>Questões divididas por assunto e nível de dificuldade.</p>
                    </div>
                    <div className="content">
                        <img src={iconFile} alt="icone de arquivo PDF" />
                        <p>Apostila em formato PDF, para estudar no computador, celular ou tablet.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}