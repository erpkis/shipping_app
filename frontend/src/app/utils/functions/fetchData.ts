import axios from "axios"
import { Dispatch } from "react"

axios.defaults.withCredentials = true;
const fetchData = async (url: string, dispatcher: Dispatch<any>) => {
    try{
      const response = await axios.get(url,{
        headers: {
          Authorization: localStorage.getItem("auth_key")
        }
      })
      dispatcher(response.data)
      console.log(response.data)
    }catch{
      
    }
    
  }

  export default fetchData