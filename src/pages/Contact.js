export default function Contact(){
    return(
        <section className="flex flex-col justify-between h-[calc(100vh-200px)] max-sm:h-auto">
            <div>
                <div className="flex max-sm:flex-col items-center mb-14">
                    <img className="mr-10 max-sm:mr-0" src="../images/icons/phone.svg" alt="" width={80} height={80}/>
                    <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                        <h3>Fone fixo:</h3>
                        <strong className="text-2xl max-sm:text-base">(11) 2086-7050</strong>
                    </div>
                </div>
                <div className="flex max-sm:flex-col items-center mb-14">
                    <img className="mr-10 max-sm:mr-0" src="../images/icons/whatsapp.svg" alt="" width={80} height={80}/>
                    <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                        <h3>Whatsapp:</h3>
                        <strong className="text-2xl max-sm:text-base">(11) 97269-6636</strong>
                    </div>
                </div>
                <div className="flex max-sm:flex-col items-center mb-14">
                    <img className="mr-10 max-sm:mr-0" src="../images/icons/email.svg" alt="" width={80} height={80}/>
                    <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                        <h3>E-mail:</h3>
                        <strong className="text-2xl max-sm:text-base">leal.contabilidade@hotmail.com</strong>
                    </div>
                </div>
            </div>
            <strong className="text-xl py-10 max-sm:text-center">Horario de funcionamento: 09:00 às 18:00</strong>
        </section>
    )
}