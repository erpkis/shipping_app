"use client"

import Link from 'next/link'
import styles from '../app/ui/navbar.module.css'
import Image from 'next/image'
import { useAuth } from '@/contexts/authContext'
import axios from 'axios'
const Navbar = () => {
    const { isAuthenticated, setIsAuthenticated, isAuthCheckingCompleted } = useAuth();

    const logout = async() => {
        
        try{
            axios.defaults.withCredentials = true;
            const response = await axios.delete('http://localhost:3000/logout', {
                headers: {
                    Authorization: localStorage.getItem("auth_key")
                }
            });
            if (response.status === 200) {
                localStorage.removeItem("auth_key")
                console.log(response)
                console.log('Wylogowano pomyslnie', response.data);
                setIsAuthenticated(false)
               
              } else {
                //error
                console.log(response + "BŁAD")
              }
            } catch (error) {
              console.error('Błąd podczas logowania:', error);
            }
        
        
        
    }
    return (
        <nav className={styles.main_nav}>
            <div className={styles.logo_container}>
                <Link href={"/"}><Image src={'/images/logo.png'} alt={'test'} fill/></Link>
            </div>
            <ul>
                <li><Link href={"/drivers"}>Kierowcy</Link></li>
                <li><Link href={"/orders"}>Zlecenia</Link></li>
                <li><Link href={"/clients"}>Klienci</Link></li>
                {isAuthCheckingCompleted ? (
                    isAuthenticated ? 
                        <li onClick={logout}>Wyloguj</li> 
                        : 
                        <li><Link href={'/session'}>Logowanie</Link></li>
                    ) : (
                    // Możesz tu dodać jakiś wskaźnik ładowania lub nic nie wyświetlać
                    <div>Ładowanie...</div>
                )}
            </ul>
        </nav>
    )
}

export default Navbar