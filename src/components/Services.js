import './Services.css';
import DataServices from '../data/Services';

export default function Services(){

    const RenderServices = DataServices.map((text) => (
        <section className='services-card'>
            <span className='text'>{text}</span>
            <div className='flex justify-end'>
                <span className='service-link'>
                    Saiba Mais
                    <img className="pl-2" src="./images/icons/arrow-right.svg" alt="" width={30}/>
                </span>
            </div>
        </section>
    ))

    return(
        <>
        <img id="banner-2" className="my-10 left-0" src="./images/banner2.webp" alt="" />
        <section className="my-20 max-sm:my-12">
            <h2 className='w-full text-center mt-20 max-sm:my-3 mb-8'>Soluções para nossos clientes</h2>
            <div id="services">
                {RenderServices}
            </div>
        </section>
        </>
    )
}