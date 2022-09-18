
const increaseVisit = async () => {
    const api = `${process.env.REACT_APP_API_URL}/api/increase`;
    const token_ipinfo = 'd11e824e6cfad7';
    if(!sessionStorage.getItem('visitor')){

        const request = await fetch(`https://ipinfo.io/json?token=${token_ipinfo}`)
                            .then(resp => resp.json())
                            .then(info => {
                                return {
                                    'ip_address':info.ip,
                                    'country':info.country,
                                    'city':info.city
                                }
                            })
                            .catch(() => {
                                return {
                                    'ip_address' : '0.0.0.0',
                                    'country' : 'anonymous',
                                    'city' : 'anonymous',
                                }
                            });
        await fetch(api,{
            'method' : 'POST',
            'body' : JSON.stringify(request),
        }).then(resp => {
            if(!resp.ok) throw new Error("Invalid IP")
            return resp.json()
        })
        .then(json => {
            sessionStorage.setItem('visitor',JSON.stringify(json.data));
        })
        .catch(err => console.log("Error : "+err));
    }
    
}
export {
    increaseVisit,
}