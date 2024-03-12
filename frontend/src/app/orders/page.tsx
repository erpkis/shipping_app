"use client"

import axios from "axios";
import { useEffect, useState } from "react";
export default function Orders() {
    const [orders, setOrders] = useState<any>()
    const fetchData = async () => {
      try{
        const response = await axios.get("http://localhost:3000/orders")
        setOrders(response.data)
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
        {orders ?  
      orders.map((driver : any) => (
        <p key={driver.id}>{driver.name}</p>
      )) : "Brak danych"}
        
         
        </div>
  
        <div>
          
        </div>
      </main>
    );
  }
  