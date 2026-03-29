import { useEffect, useState } from 'react'
import { Links } from '../links/Links'
import './menu.css'
import { useLocation } from 'react-router-dom'

export function Menu(){
    const [ scrolled, setScrolled ] = useState<boolean>(false)

    const location = useLocation()

    const isDetailsPage = location.pathname.startsWith('/detalhes')

    const classNames = ['menu-nav', scrolled && 'scrolled', isDetailsPage && 'menu-dark'].filter(Boolean).join(' ')
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
            <nav className={classNames} >
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