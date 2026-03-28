import { useEffect, useState } from 'react'
import { Links } from '../links/Links'
import './menu.css'

export function Menu(){

    const [ scrolled, setScrolled ] = useState<boolean>(false)

    useEffect(() => {
        function handleScroll(){
            if(window.scrollY > 0){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <header>
            <nav className={`menu-nav ${scrolled ? 'scrolled' : ''}`} >
                <strong>LOGO</strong>
                <ul>
                    {Links.map((link)=>(
                        <li key={link.label}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}