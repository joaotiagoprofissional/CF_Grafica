import './about.css'

export function About(){
    return(
        <section className="container-sobre">
            <h1>CF Soluções<br />Gráfica</h1>
            <div className="paragraph-img">
                <p>
                    Com mais de <span className='magenta'>uma década de experiência</span>, nossa gráfica é
                    referência em qualidade, inovação e compromisso no setor de impressão. Oferecemos uma ampla
                    gama de soluções para atender às demandas de empresas e pessoas físicas, incluindo
                    <span className='ciano'> materiais promocionais, itens editoriais, impressão digital e muito mais. </span>
                    Ao longo dos anos, aprimoramos nossas técnicas, investimos em tecnologias de ponta e formamos uma equipe
                    altamente qualificada para garantir que cada projeto atenda aos mais altos padrôes de qualidade.
                    Além disso, <span className="amarelo">nosso compromisso com prazos, e atendimento personalizado,
                    reflete a confiança e fidelidade de nossos clientes.</span><br />Estamos sempre atentos às tendências do mercado
                    e as necessidades dos nossos parceiros, oferecendo soluções sustentáveis e criativas para destacar sua marca.<br />
                    Confie em quem tem história, solidez e paixão pelo que faz.<br /><i>Somos mais do que uma gráfica, somos parceiros
                    no sucesso de cada impressão.</i>            
                </p>
                <div className="img-legend">
                    <img src='../../../public/images/imagem_sobre.png' alt="Imagem da Empresa"/>
                    <figure>
                        <blockquote>
                            <p>"Confiança não se compra, se conquista! Se quer demonstre!"</p>
                        </blockquote>
                        <figcaption><cite className='name-author' >Roniellyson Silva</cite></figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}