import './contact.css'

export function Contact(){

    return(
        <div className="container-contact">
            <h1>Entre em Contato</h1>
            <form>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" />
            
                <label htmlFor="phone">Telefone</label>
                <input type="text" id="phone" />
            
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" />

                <label htmlFor="message">Mensagem</label>
                <textarea id="message"></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}