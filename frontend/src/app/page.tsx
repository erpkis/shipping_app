"use client";

import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [drivers, setDrivers] = useState<any>()
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/drivers")
    setDrivers(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <main>
      <div>

      {drivers && 
      drivers.map((driver : any) => (
        <p key={driver.id}>{driver.name}</p>
      ))}
       
      </div>

      <div>
        
      </div>
    </main>
  );
}
