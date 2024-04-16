"use client"

type Driver = {
  name: string;
  surname: string;
  phone_number: string;
  address: string;
}
import FormComponent from "@/components/Form";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import fetchData from "../utils/functions/fetchData";
import axios from "axios";
import { driverFields } from "../utils/fields";
export default function Drivers() {
    const [drivers, setDrivers] = useState<any>()
    
    useEffect(() => {
      
      fetchData("http://localhost:3000/drivers", setDrivers)
    }, [])


    const onSubmit: SubmitHandler<Driver> = async(data: any) => {
      try{
      const response = await axios.post('http://localhost:3000/drivers', {driver: data},{
        headers: {
          Authorization: localStorage.getItem("auth_key"),
        },
      });

      if (!response) {
        throw new Error('Network response was not ok');
      }

    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
    }
    return (
      <main>
        <div>
        {drivers ?  
      drivers.map((driver : any) => (
        <p key={driver.id}>{driver.name}</p>
      )) : "Brak danych"}
        
         
        </div>
  
        <div>
          <FormComponent fields={driverFields} onSubmit={onSubmit}/>
        </div>
      </main>
    );
  }
  