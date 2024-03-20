"use client"

import FormComponent from "@/components/Form";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
type LoginField = {
  login: string,
  password: string,
}
export default function Session() {
  const [error, setError] = useState(null);
  const loginFields = [
    {name: 'user[email]', label: 'Email', type: 'text'},
    {name: 'user[password]', label: 'Hasło', type: 'password'}
  ]
  const handleLogin: SubmitHandler<LoginField> = async (data: LoginField) => {
    console.log(data)
    try {
      const response = await axios.post('http://localhost:3000/login', data
      );

      if (response.status === 200) {
        console.log('Logowanie pomyślne', response.data);
       
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
