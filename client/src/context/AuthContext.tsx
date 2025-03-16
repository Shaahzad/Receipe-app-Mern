import { createContext, useState } from "react";
import axios from "axios"



const API_URL = "http://192.168.0.105:5000"


interface AuthContextData {
    token : string | null;
    isLoading : boolean;
    userId : string | null;
    signUp : (email : string, password : string) => Promise<boolean>;
    signIn : (email : string, password : string) => Promise<boolean>;
    signOut : () => Promise<void>;
}


export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
)

export const AuthProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
 

    const signUp = async (email : string, password : string) : Promise<boolean> => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/register`, {email, password});
        if(response?.data?.success) return true
        else return false
    } catch (error) {
        console.log(error)
       if(axios.isAxiosError(error)){
            console.log(error.response?.data)
    }
       return false;
    }
    }

    const signIn = async (email : string, password : string) : Promise<boolean> => {
        return true;
     }

     const signOut = async(): Promise<void> => {}

    return <AuthContext.Provider value={{token, isLoading, userId, signUp, signIn, signOut}}>
        {children}
    </AuthContext.Provider>
}