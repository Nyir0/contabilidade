import './Login.css';

export default function Login(){

    const SubmiteForm = (e) => {
        e.preventDefault();

        window.location.href="/admin";
    }
    
    return(
        <section id="section-form">
            <form onSubmit={SubmiteForm}>
                <input type="email" id="email" name="password" placeholder='Usuário' />
                <input type="password" id="password" name="password" placeholder='Senha' />
                <button type="submite" className='w-1/3 py-2 my-5'>Login</button>
            </form>
        </section>
    )
}