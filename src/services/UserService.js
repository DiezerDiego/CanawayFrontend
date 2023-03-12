import { apihost,token } from "./env";
export default {
  async sendForm(data) {
    
    const fetchR = await fetch(apihost,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+token,
        
      },
      body:JSON.stringify(data)
    });
    
    const response=await fetchR.json();
    return response;
      
  },
  
};
