import Alert from "./../components/Utils/Alert";

const api = process.env.REACT_APP_API_URL;
const login = async (request) => {
    const endpoint = `${api}/api/auth/login`;
    return await fetch(endpoint,{
            'method' : 'POST',
            'body' : JSON.stringify(request),
        }).then(resp => {
            if(!resp.ok) throw new Error("Invalid credentials");
            return resp.json();
        })
        .then(json => {
            const data = json.data;
            localStorage.setItem('auth_token',data.credentials.token);
            // Alert("success","Good",data.message);
            return true;
        })
        .catch(err => {
            Alert("error","Error",err.message)
            return false;
        });
}
const logout = async () => {

}
export {
    login,
    logout
}