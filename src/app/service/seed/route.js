import { ConnectDB } from "@/lib/ConnectDB"

export const GET = async(req,res) =>{
     const db = await ConnectDB()
     const servicesCollection = db.collection('services')
     try {
          
     } catch (error) {
          console.log(error);
          
     }
}