import { createContext, useEffect, useState } from "react";
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";



const API_URL = "http://192.168.0.105:5000"


interface AuthContextData {
    token : string | null;
    isLoading : boolean;
    userId : string | null;
    signUp : (email : string, password : string) => Promise<boolean>;
    signIn : (email : string, password : string) => Promise<boolean>;
    signOut : () => Promise<void>;
    isAuthenticated: boolean;
    checkAuth: ()=> Promise<boolean>
}


export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
)

export const AuthProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const checkAuth = async(): Promise<boolean>=>{
        try {
            const getStoredtoken = await AsyncStorage.getItem("token");
            const getStoredUserId = await AsyncStorage.getItem("userId");
            if(getStoredtoken && getStoredUserId){
                setToken(getStoredtoken)
                setUserId(getStoredUserId)
                setIsAuthenticated(true)
                return true
            }
        } catch (error) {
            console.log(error)
            return false
        }finally{
            setIsLoading(false)
        }
        return false
    }

    useEffect(()=>{
        checkAuth()
    },[])
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
        try {
            const result = await axios.post(`${API_URL}/api/auth/login`, {email, password});
            const {token, userId, success} = result.data;
            if(!success) {
                await AsyncStorage.setItem("token", token)
                setToken(token)
                await AsyncStorage.setItem("userId", userId)
                setUserId(userId)
                setIsAuthenticated(true)
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log(error)
            if(axios.isAxiosError(error)){
                 console.log(error.response?.data)
         }
            return false
        }
     }

     const signOut = async(): Promise<void> => {
        try {
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("userId")
            setIsAuthenticated(false)
            setToken(null)
            setUserId(null)
        } catch (error) {
           console.log(error)
        }
     }

    if(isLoading) return <ActivityIndicator size={'large'} color={"red"}/>


    return <AuthContext.Provider value={{token, isLoading, userId, signUp, signIn, signOut, isAuthenticated, checkAuth}}>
        {children}
    </AuthContext.Provider>
}