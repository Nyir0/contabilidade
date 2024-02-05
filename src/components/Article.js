import "../components/Article.css";

export default function Article(){
    return(
        <>
        <section id="articles" className="mt-28 max-md:mt-5">
            <div className="flex w-full justify-between items-end">
                <h2>Artigos</h2>
                <span id="all-articles">Ver todos</span>
            </div>
            <div className="card">
                <section>
                    <img className="w-full" src="./images/art1.webp" alt="" />
                    <div className="bg-[var(--yellow-base)] p-5">
                        <p className="text-center">
                        O MEI é essencial para empresas, simplificando a formalização, oferecendo benefícios previdenciários e viabilizando o acesso a crédito, fortalecendo a estabilidade financeira e o crescimento sustentável.
                        </p>
                    </div>
                </section>
                <section>
                    <img className="w-full" src="./images/art2.webp" alt="" />
                    <div className="bg-[var(--yellow-base)] p-5">
                        <p className="text-center">
                        O MEI é essencial para empresas, simplificando a formalização, oferecendo benefícios previdenciários e viabilizando o acesso a crédito, fortalecendo a estabilidade financeira e o crescimento sustentável.
                        </p>
                    </div>
                </section>
                <section>
                    <img className="w-full" src="./images/art3.webp" alt="" />
                    <div className="bg-[var(--yellow-base)] p-5">
                        <p className="text-center">
                        O MEI é essencial para empresas, simplificando a formalização, oferecendo benefícios previdenciários e viabilizando o acesso a crédito, fortalecendo a estabilidade financeira e o crescimento sustentável.
                        </p>
                    </div>
                </section>
                <section>
                    <img className="w-full" src="./images/art1.webp" alt="" />
                    <div className="bg-[var(--yellow-base)] p-5">
                        <p className="text-center">
                        O MEI é essencial para empresas, simplificando a formalização, oferecendo benefícios previdenciários e viabilizando o acesso a crédito, fortalecendo a estabilidade financeira e o crescimento sustentável.
                        </p>
                    </div>
                </section>
            </div>
        </section>
        </>
    )
}