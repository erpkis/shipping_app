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
import { gql, useQuery } from "@apollo/client";

const GET_DRIVERS = gql`
  query GetDrivers{
    drivers{
      id
      name
    }
  }`
export default function Drivers() {
    const [drivers, setDrivers] = useState<any>()

    const {loading, error, data} = useQuery(GET_DRIVERS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;


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
        { 
      data.drivers.map((driver : any) => (
        <p key={driver.id}>{driver.name}</p>
      ))}
        
         
        </div>
  
        <div>
          <FormComponent fields={driverFields} onSubmit={onSubmit}/>
        </div>
      </main>
    );
  }
  