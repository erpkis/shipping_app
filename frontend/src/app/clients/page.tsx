"use client"

import axios from "axios";
import { useEffect, useState } from "react";
export default function Clients() {
    const [clients, setClients] = useState<any>()
    const fetchData = async () => {
      try{
        const response = await axios.get("http://localhost:3000/clients")
        setClients(response.data)
        console.log(response.data)
      }catch{
        
      }
      
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    
    return (
      <main>
        <div>
        {clients ?  
      clients.map((driver : any) => (
        <p key={driver.id}>{driver.name}</p>
      )) : "Brak danych"}
        
         
        </div>

        
  
        <div>
          
        </div>
      </main>
    );
  }
  