const api = process.env.REACT_APP_API_URL;

const dashboardService = (token) => {
    const endpoint = `${api}/api/admin/dashboard`;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    const request = fetch(endpoint,{
        headers: headers
    }).then(resp => {
        if(!resp.ok){
            throw new Error("Something went wrong");
        }
        return resp.json();
    })
    .then(json => json.data[0])
    .catch(err => err.message);

    return request
}
const getAllVisits = (token) => {
    const endpoint = `${api}/api/admin/visits`;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    const request = fetch(endpoint,{
        headers: headers,
    }).then(resp => {
        if(!resp.ok){
            throw new Error("Something went wrong");
        }
        return resp.json();
    })
    .then(json => json.data)
    .catch(err => err.message);

    return request;
}
export {
    dashboardService,
    getAllVisits,
}
