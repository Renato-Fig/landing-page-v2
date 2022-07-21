import "../styles/header.scss"

import mockupImg from "../assets/mockup.png"

export function Header() {
    return (
        <div id="header">
            <div className="container">
                    <h1>Quer aumentar seus acertos em Matemática no ENEM?</h1>
                    <p>É através do estudo por questões comentadas dos anos anteriores que você será capaz de identificar os padrões do ENEM e resolver a prova de matemática com a segurança de alguém que já entendeu como a Matemática no ENEM é cobrada.</p>
                    <nav>
                        <a href="#section_F">Obter material agora</a>
                    </nav>
                </div>
            <section id="section_A">
                <div className="container">
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/R15SISxw7-8?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <img src={ mockupImg } alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}