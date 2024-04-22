"use client"
import { useAuth } from "@/contexts/authContext";
import { logout } from "@/lib"
import axios from "axios";

const LogoutButton = () => {
  const {setIsAuthenticated} = useAuth()
    const logoutFromBackend = async() => {
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
                window.location.reload()
                //router.push('/')
               
              } else {
                //error
                console.log(response + "BŁAD")
              }
            } catch (error) {
              console.error('Błąd podczas logowania:', error);
            }
        
        
       
    }
return (
<form action={logout} onSubmit={logoutFromBackend}>
    <button><li>Wyloguj</li></button>
</form>
)
}
export default LogoutButton