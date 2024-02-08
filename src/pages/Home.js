import Article from '../components/Article';
import Services from '../components/Services';

export default function Home() {
    return(
        <>
        <main className="flex items-center justify-center pt-14 max-lg:pt-2 max-sm:flex-col">
            <div className="w-[30rem] max-sm:w-full h-80 max-sm:h-auto relative bg-[var(--black-light)] mr-32 max-sm:mr-0 max-sm:mb-4">
                <img className="w-[30rem] absolute max-sm:static left-12 bottom-12" src="./images/banner1.webp" alt=""/>
            </div>
            <div className="w-[40vw] max-sm:w-full pb-24 max-sm:pb-4 max-sm:flex max-sm:flex-col max-sm:items-center">
                <h1 className="uppercase mb-4 max-sm:text-2xl">A <span className="text-[var(--yellow-gold)]">Leal contabilidade</span> é</h1>
                <p className="text-xl max-sm:text-center">
                o alicerce firme que constrói confiança e clareza nas finanças, garantindo uma administração sólida e confiável para o sucesso do seu negócio
                </p>
            </div>
        </main>
        <div id="btn-page-down" className="bg-[var(--yellow-base)] absolute right-40 rounded-full p-3">
            <img src="./images/icons/arrow-down.svg" alt="" width={50} height={50}/>
        </div>
        <Article />
        <Services />
        <section className='flex flex-col items-center border-b-2 border-b-[var(--yellow-gold)] pb-8 mb-14'>
            <h2 className='text-[var(--yellow-gold)] text-center'>Nosso time de contadores está pronto para apoiar você</h2>
            <p className='text-center text-2xl max-sm:text-lg max-sm:text-justify max-sm:px-5 font-normal my-10'>
                Nosso time de contadores está pronto para apoiar você em todas as suas necessidades contábeis. Com profissionais altamente qualificados e experientes, estamos dedicados a oferecer soluções personalizadas que atendam às especificidades do seu negócio. Seja para lidar com complexidades fiscais, otimizar processos contábeis ou fornecer orientação estratégica, nossa equipe está comprometida em garantir a precisão e a conformidade em cada etapa. Estamos aqui para simplificar o seu caminho no mundo da contabilidade, permitindo que você concentre sua energia no crescimento e no sucesso de sua empresa. Conte conosco para ser seu parceiro confiável e impulsionar o desenvolvimento sustentável do seu negócio.
            </p>
            <button className='uppercase px-32 max-sm:text-4xl'>Fale com um representante</button>
        </section> 
        </>
    )
}