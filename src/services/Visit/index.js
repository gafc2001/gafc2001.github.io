
const increaseVisit = async () => {
    const api = `${process.env.REACT_APP_API_URL}/api/increase`;
    const resp = await fetch(api,{
        'method' : 'POST',
    })
    console.log(resp.text());
}

export {
    increaseVisit
}