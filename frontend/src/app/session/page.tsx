"use client"

import FormComponent from "@/components/Form";
import { useAuth } from "@/contexts/authContext";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation'
type LoginField = {
  login: string,
  password: string,
}
export default function Session() {
  const [error, setError] = useState(null);
  const router = useRouter()
  const loginFields = [
    {name: 'user[email]', label: 'Email', type: 'text'},
    {name: 'user[password]', label: 'Hasło', type: 'password'}
  ]

  const authContext = useAuth()
  const handleLogin: SubmitHandler<LoginField> = async (data: LoginField) => {
    console.log(data)
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post('http://localhost:3000/login', data
      );

      if (response.status === 200) {
        console.log(response)
        localStorage.setItem("auth_key", response.headers["authorization"])
        console.log('Logowanie pomyślne', response.data);
        authContext!.setIsAuthenticated(true)
        router.push('/')
      } else {
        //error
        console.log(response)
      }
    } catch (error) {
      console.error('Błąd podczas logowania:', error);
    }
  };

  return (
    <FormComponent fields={loginFields} onSubmit={handleLogin}/>
  );
}
