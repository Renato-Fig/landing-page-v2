import "../styles/frequent-questions.scss"

import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export function FrequentQuestions() {

    return (
        <section id="frequent-questions">
            <div className="container">                
                <h2>Perguntas Frequentes</h2>
                <div className="wrapper">

                    <div className="content">
                        <input type="checkbox" id="faq01"/>
                        <label for="faq01">
                            <span>
                                <FaAngleDown className="angle-down"/>
                                <FaAngleRight className="angle-right"/>
                            </span>
                            Para quem é esta apostila?
                        </label>
                        <p id="faq01">Será disponibilizado através de download na plataforma Hotmart. Caso haja qualquer problema, nós responderemos as dúvidas através dos meios de comunicação em um período de até 48 horas.</p>
                    </div>

                    <div className="content">
                        <input type="checkbox" id="faq02"/>
                        <label for="faq02">
                            <span>
                                <FaAngleDown className="angle-down"/>
                                <FaAngleRight className="angle-right"/>
                            </span>
                            
                            Como terei acesso ao ebook?
                        </label>    
                        <p id="faq02">Principalmente para estudantes que têm dificuldade em Matemática e que estão em preparação para o ENEM.</p>
                    </div>

                    <div className="content">
                        <input type="checkbox" id="faq03"/>
                        <label for="faq03">
                            <span>
                                <FaAngleDown className="angle-down"/>
                                <FaAngleRight className="angle-right"/>
                            </span>
                            Há uma garantia?
                        </label>    
                        <p id="faq03">Por decreto judicial, você tem direito a 7 dias de garantia. Caso o produto não seja do seu agrado, seu dinheiro será devolvido.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}