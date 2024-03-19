"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import fetchData from "../utils/functions/fetchData";
export default function Clients() {
    const [clients, setClients] = useState<any>()
    
  
    useEffect(() => {
      fetchData("http://localhost:3000/clients", setClients)
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
  