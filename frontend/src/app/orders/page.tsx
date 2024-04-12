"use client"

type Order = {
  deliveryLocation: string;
  weight: number;
  client_id: string;
  car_id: string;
  driver_id: string;
  description: string;
}

import axios from "axios";
import { useEffect, useState } from "react";
import fetchData from "../utils/functions/fetchData";
import { orderFields } from "../utils/fields";
import { SubmitHandler } from "react-hook-form";
import FormComponent from "@/components/Form";
export default function Orders() {
    const [orders, setOrders] = useState<any>()
    const driverFields = [
      { name: 'name', label: 'Imię', type: 'text' },
      { name: 'surname', label: 'Nazwisko', type: 'text' },
      { name: 'phone_number', label: 'Numer telefonu', type: 'text' },
      { name: 'address', label: 'Adres', type: 'Adres' },
    ];

    const onSubmit: SubmitHandler<Order> = async(data: any) => {
      try{
      const response = await axios.post('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem("auth_key"),
        },
        body: JSON.stringify(data),
      });

      if (!response) {
        throw new Error('Network response was not ok');
      }

    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
    }

    useEffect(() => {
      fetchData("http://localhost:3000/orders", setOrders)
    }, [])
    return (
      <main>
        <div>
        {orders ?  
      orders.map((order : any) => (
        <p key={order.id}>{order.status}</p>
      )) : "Brak danych"}
        
         
        </div>
  
        <div>
        <FormComponent fields={orderFields} onSubmit={onSubmit}/>
        </div>
      </main>
    );
  }
  