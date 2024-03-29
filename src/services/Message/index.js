import Alert from "./../../components/Utils/Alert";

const sendMessage = async(data) => {
    const api = `${process.env.REACT_APP_API_URL}/api/message`;

    const headers = new Headers();
    const token = JSON.parse(sessionStorage.getItem('visitor')).token;
    headers.append("Authorization", `Bearer ${token}`)
    const request = await fetch(api,{
        'method' : 'POST',
        'headers' : headers,
        'body' : JSON.stringify(data)
    }).then( resp => {
        if(!resp.ok) throw new Error("Error")
        return resp.json();
    }).then(json => {
        Alert('success','Yeahh!','Message sent')
        return true;
    })
    .catch(err => {
        Alert('error','Oops...','Something went wrong!');
        return false;
    })
    return request;
}

export {
    sendMessage
}