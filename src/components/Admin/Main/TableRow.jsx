import React from 'react'
export const TableRow = ({visit,index}) => {
    
    return (
    <tr>
        <td>{index+1}</td>
        <td>{visit.ip_address}</td>
        <td>{visit.city}</td>
        <td>{visit.email}</td>
        <td>{visit.total_visits}</td>
        <td>{visit.last_visit}</td>
        <td>
            <img src={visit.country.image} alt="flag" width="40"/>
        </td>
    </tr>
    )
}
