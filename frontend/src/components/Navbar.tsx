

"use client"

import Link from 'next/link'
import styles from '../app/ui/navbar.module.css'
import Image from 'next/image'
import LogoutButton from './LogoutButton'
import { useAuth } from '@/contexts/authContext'

const Navbar =() => {
    const {isAuthenticated} = useAuth()
    console.log(isAuthenticated)
    console.log("TEST2222")
    
    
    return (
        <nav className={styles.main_nav}>
            <div className={styles.logo_container}>
                <Link href={"/"}><Image src={'/images/logo.png'} alt={'test'} fill/></Link>
            </div>
            <ul>
            {isAuthenticated ? 
                     
                        <>
                            <li><Link href={"/drivers"}>Kierowcy</Link></li>
                            <li><Link href={"/orders"}>Zlecenia</Link></li>
                            <li><Link href={"/clients"}>Klienci</Link></li>
                            <LogoutButton />
                        </>
                        : 
                        
                        <li><Link href={'/session'}>Logowanie</Link></li>
                }
            </ul>
        </nav>
    )
}

export default Navbar