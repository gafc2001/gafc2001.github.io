import Alert from "./../../components/Utils/Alert";

const sendMessage = async(data) => {
    const api = `${process.env.REACT_APP_API_URL}/api/message`;

    const headers = new Headers();
    const token = JSON.parse(localStorage.getItem('visitor')).token;
    headers.append("Authorization", `Bearer ${token}`)
    await fetch(api,{
        'method' : 'POST',
        'headers' : headers,
        'body' : JSON.stringify(data)
    }).then( resp => {
        if(!resp.ok) throw new Error("Error")
        return resp.json();
    }).then(json => {
        Alert('success','Yeahh!','Message sent')
    })
    .catch(err => {
        Alert('error','Oops...','Something went wrong!');
    })
}

export {
    sendMessage
}