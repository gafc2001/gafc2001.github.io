import Alert from "./../components/Utils/Alert";

const api = process.env.REACT_APP_API_URL;
const signinService = async(request) => {
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
            return data;
        })
        .catch(err => {
            Alert("error","Error",err.message)
            return false;
        });
}
const signoutService = async () => {

}
const verifyService = async (token) => {
    const endpoint = `${api}/api/auth/verify`;
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    const request = await fetch(endpoint,{
        "headers": headers
    }).then(resp => resp.ok)
    .catch(err => false) 
    return request;
}
export {
    signinService,
    signoutService,
    verifyService,
}