"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import fetchData from "../utils/functions/fetchData";
export default function Orders() {
    const [orders, setOrders] = useState<any>()
    
    useEffect(() => {
      fetchData("http://localhost:3000/orders", setOrders)
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
  