import axios from "axios";
import { useState } from "react";

export default function Session() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        user: {
          email: email,
          password: password
        }
      });

      if (response.status === 200) {
        console.log('Logowanie pomyślne', response.data);
       
      } else {
        //error
      }
    } catch (error) {
      console.error('Błąd podczas logowania:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <label htmlFor="password">Hasło:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button type="submit">Zaloguj się</button>
      
      {error && <p>{error}</p>}
    </form>
  );
}
