

import Link from 'next/link'
import styles from '../app/ui/navbar.module.css'
import Image from 'next/image'
import axios from 'axios'
import { getSession } from '@/lib'
import LogoutButton from './LogoutButton'

const Navbar =async () => {
    
    const sessionData = await getSession();
    //const router = useRouter()
    console.log(sessionData)
    
    
    return (
        <nav className={styles.main_nav}>
            <div className={styles.logo_container}>
                <Link href={"/"}><Image src={'/images/logo.png'} alt={'test'} fill/></Link>
            </div>
            <ul>
            {sessionData ? 
                     
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