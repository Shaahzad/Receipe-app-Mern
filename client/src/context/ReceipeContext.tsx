import { createContext, useContext, useState } from "react";
import axios from "axios"
import { AuthContext } from "./AuthContext";

const API_URL = "http://192.168.0.105:5000"


export interface Receipe {
    _id: string;
    title: string;
    description: string;
    difficulty: "Easy" | "Medium" | "Hard";
    createdBy: string;
    createdAt: string
}


interface ReceipeContextData {
    receipes: Receipe[];
    createReceipe: (
        receipe: Omit<Receipe, '_id' | 'createdBy' | 'createdAt'>
    ) => Promise<void>
    fetchReceipes: () => Promise<void>
}

export const ReceipeContext = createContext<ReceipeContextData>({} as ReceipeContextData)

export const ReceipeProvider : React.FC<{children : React.ReactNode}> = ({children}) =>{
    const [receipes, setReceipes] = useState<Receipe[]>([])
    const {token} = useContext(AuthContext)
    const createReceipe = async(Receipe : Omit<Receipe, '_id' | 'createdBy' | 'createdAt'>)=>{
    try {
        const result = await axios.post(`${API_URL}/api/receipe/create`, receipes,{
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
        if(result?.data?.success) setReceipes([...receipes, result.data.data])
    } catch (error) {
        console.log(error)
    }
    }
    const fetchReceipes = async()=>{
        try {
            const result = await axios.get(`${API_URL}/api/receipe/get`,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
            })
            if(result?.data?.success) setReceipes(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    return <ReceipeContext.Provider value={{createReceipe, receipes, fetchReceipes}}>{children}</ReceipeContext.Provider>
}