import axios from "axios"
import { Dispatch } from "react"

const fetchData = async (url: string, dispatcher: Dispatch<any>) => {
    try{
      const response = await axios.get(url)
      dispatcher(response.data)
      console.log(response.data)
    }catch{
      
    }
    
  }

  export default fetchData