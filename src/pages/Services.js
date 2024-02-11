import '../components/Services.css';
import './Services.css';
import DataServices from '../data/Services';

export default function Services(){

    const RenderServices = DataServices.map((text, index) => (
        <a href={`https://api.whatsapp.com/send?phone=5511972696636&text=Olá%20Leal%20Contabilidade,%20estou%20entrando%20em%20contato%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20${encodeURIComponent(text)}%20!!!`} target="blank" key={index} className='services-card'>
            <span className='text'>{text}</span>
            <div className='flex justify-end'>
                <span className='service-link'>
                    Fale conosco
                    <img className="pl-2" src="./images/icons/arrow-right.svg" alt="" width={30}/>
                </span>
            </div>
        </a>
    ))

    return(
        <section className="h-auto mb-20">
            <div id='services'>
                {RenderServices}
            </div>
        </section>
    )
}