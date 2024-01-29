export default function Home() {
    return(
        <>
        <main className="flex items-center justify-center pt-14">
            <div className="w-[30rem] h-80 relative bg-[var(--black-light)] mr-32">
                <img className="w-[30rem] absolute left-12 bottom-12" src="./images/banner1.webp" alt=""/>
            </div>
            <div className="w-[40vw] pb-24">
                <h1 className="uppercase mb-4">A <span className="text-[var(--yellow-base)]">Leal contabilidade</span> é</h1>
                <p className="text-xl">
                o alicerce firme que constrói confiança e clareza nas finanças, garantindo uma administração sólida e confiável para o sucesso do seu negócio
                </p>
            </div>
        </main>
        </>
    )
}