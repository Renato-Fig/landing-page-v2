import "../styles/landing-page.scss"


import { Header } from "../components/Header"
import { BenefitsOfBuy } from "../components/BenefitsOfBuy"
import { SocialProof } from "../components/SocialProof"
import { PagesExamples } from "../components/PagesExamples"
import { SellCard } from "../components/SellCard"
import { FrequentQuestions } from "../components/FrequentQuestions"
import { Countdown } from "../components/Countdown"

export function LandingPage() {
    return (
        <div id="landing-page">
            <Countdown/>
            <Header />

            <section id="section_B">
                <div className="container">                    
                    <p>Pensando nisso, nós juntamos as questões mais importantes de Matemática do Enem e resolvemos passo a passo, expondo todas as pegadinhas e padrões da prova.</p>
                </div>
            </section>

            <BenefitsOfBuy />

            <SocialProof />

            <PagesExamples />

            <SellCard />

            <FrequentQuestions />
            
            <footer>
                &copy; We Study - 2022. Todos os direitos reservados.
            </footer>
        </div>
    )
}