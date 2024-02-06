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
        </>
    )
}