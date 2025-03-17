import { createContext, useState } from "react";




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
}

export const ReceipeContext = createContext<ReceipeContextData>({} as ReceipeContextData)

export const ReceipeProvider : React.FC<{children : React.ReactNode}> = ({children}) =>{
    const [receipes, setReceipes] = useState<Receipe[]>([])
    
    const createReceipe = async()=>{

    }
    return <ReceipeContext.Provider value={{createReceipe, receipes}}>{children}</ReceipeContext.Provider>
}