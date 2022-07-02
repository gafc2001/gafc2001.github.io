
const increaseVisit = async () => {
    const api = `${process.env.REACT_APP_API_URL}/api/increase`;
    if(!localStorage.getItem('visitor')){
        const resp = await fetch(api,{
            'method' : 'POST',
        }).then(resp => resp.json())
        .then(json => json.data)
        localStorage.setItem('visitor',JSON.stringify(resp));
        console.log('n');
    }
    
}

export {
    increaseVisit
}