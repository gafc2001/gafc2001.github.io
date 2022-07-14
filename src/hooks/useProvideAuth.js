import {useState} from 'react'
import {signinService} from "./../services/Auth";
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
            setIsAuthenticated(true);
            localStorage.setItem('auth_token',resp.credentials.token);
        })
        setIsLoading(false);
        
    }
    const signout = () => {
  
    }
    return {
        user,
        error,
        signin,
        signout,
        isLoading,
        isAuthenticated,
    }
}

export default useProvideAuth