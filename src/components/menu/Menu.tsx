import './menu.css'

export function Menu(){


    return(
        <header>
            <nav className='menu-nav'>
                <strong>LOGO</strong>
                <ul>
                    <li>Home</li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li>Blog</li>
                </ul>
            </nav>
        </header>
    )
}