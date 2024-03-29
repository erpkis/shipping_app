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
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
export default function Drivers() {
    const [drivers, setDrivers] = useState<any>()
    const { isAuthenticated} = useAuth();
    const router = useRouter()
    const driverFields = [
      { name: 'name', label: 'Imię', type: 'text' },
      { name: 'surname', label: 'Nazwisko', type: 'text' },
      { name: 'phone_number', label: 'Numer telefonu', type: 'text' },
      { name: 'address', label: 'Adres', type: 'Adres' },
    ];
    useEffect(() => {
      if(!isAuthenticated){
        router.push('/session')
      }
      fetchData("http://localhost:3000/drivers", setDrivers)
    }, [isAuthenticated, router])


    const onSubmit: SubmitHandler<Driver> = async(data: any) => {
      console.log(data)
      try{
      const response = await fetch('http://localhost:3000/drivers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
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
  