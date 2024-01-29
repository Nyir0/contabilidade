import '../components/Header.css';
import '../utils/Menu.js';
import $ from 'jquery';

export default function Header(){

    if($(window).width() >= 767){
        return(
            <header>
                <nav>
                    <img src="./logo.webp" alt="" width={200} height={200}/>
                    <ul className="flex">
                        <li>
                            <a href="#">
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Quem Somos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contatos
                            </a>
                        </li>
                    </ul>
                </nav>
                <button>Abra sua empresa</button>
            </header>
        )
    }else{
        return(
            <header>
                <img id="open-menu" src="./images/icons/hamburguer.svg" alt="" width={60} height={60}/>
                <img src="./logo.webp" alt="" width={100} height={100}/>
                <nav id="menu-mobile">
                    <img id="close-menu" src="./images/icons/close-menu.svg" alt="" />
                    <ul className="flex">
                        <li>
                            <a href="#">
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Quem Somos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contatos
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}