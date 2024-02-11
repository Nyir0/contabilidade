import '../components/Header.css';
import '../utils/Menu.js';
import '../utils/Zap';
import $ from 'jquery';

export default function Header(){

    if($(window).width() >= 767){
        return(
            <header>
                <nav>
                    <img src="./logo.webp" alt="" width={200} height={200}/>
                    <ul className="flex">
                        <li>
                            <a href="/">
                                início
                            </a>
                        </li>
                        <li>
                            <a href="/servicos">
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="/quem-somos">
                                Quem Somos
                            </a>
                        </li>
                        <li>
                            <a href="/contatos">
                                Contatos
                            </a>
                        </li>
                    </ul>
                </nav>
                <button id="zap-btn1">Abra sua empresa</button>
            </header>
        )
    }else{
        return(
            <header>
                <img id="open-menu" src="./images/icons/hamburguer.svg" alt="" width={60} height={60}/>
                <img src="./logo.webp" alt="" width={100} height={100}/>
                <nav id="menu-mobile">
                    <img id="close-menu" src="./images/icons/close-menu.svg" alt="" width={40}/>
                    <ul className="flex">
                        <li>
                            <a href="/">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="/servicos">
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="/quem-somos">
                                Quem Somos
                            </a>
                        </li>
                        <li>
                            <a href="/contatos">
                                Contatos
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}