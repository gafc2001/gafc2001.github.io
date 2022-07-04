import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
        MySwal.fire({
            icon: 'success',
            title: 'Yeahh!',
            text: 'Message sent',
        })
    })
    .catch(err => {
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    })
}

export {
    sendMessage
}