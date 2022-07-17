import {useState} from 'react'
import {signinService, verifyService} from "./../services/Auth";
const useProvideAuth = () => {
    const [user,setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const signin = async(data) => {
        setIsLoading(true);
        await signinService(data).then( resp => {
            if (resp === false) {
                setError("Invalid credentials");
                return;
            }
            setUser({
                "email" : resp.email,
                "name" : resp.name,
            })
            localStorage.setItem('auth_token',resp.credentials.token);
            setIsAuthenticated(true);
        })
        setIsLoading(false);   
    }
    const signout = () => {
  
    }

    const verifyAuthentication = async () => {
        const token = localStorage.getItem('auth_token');
        if(!token){
            setIsAuthenticated(false);
            return;
        }
        setIsLoading(true);
        const response = await verifyService(token);
        setIsAuthenticated(response);
        setIsLoading(false);
    }
    return {
        user,
        error,
        signin,
        signout,
        isLoading,
        isAuthenticated,
        verifyAuthentication,
    }
}

export default useProvideAuth