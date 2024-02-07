import Copyright from "../components/Copyright";
import "./Footer.css";

export default function Footer(){
    return(
        <>
            <footer>
                <span className="uppercase -my-32">Leal Contabilidade</span>
                <div>
                    <span>Fone fixo:</span>
                    <br/>
                    <span>(11) 2086-7050</span>
                </div>
                <div>
                    <span>Whatsapp:</span>
                    <br/>
                    <span>(11) 97269-6636</span>
                </div>
                <div>
                    <span>E-mail:</span>
                    <br/>
                    <span>leal.contabilidade@hotmail.com</span>
                </div>
                <Copyright />
            </footer>
        </>
    )
}