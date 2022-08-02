import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap' 
import { TableRow } from '../../components/Admin/Main/TableRow'
import { TableBodyLoading } from '../../components/Utils/TableBodyLoading'
import { getAllVisits } from '../../services/Dashboard'
export const Visits = () => {
  const [visits,setVisits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const response = async () => {
      const token = localStorage.getItem("auth_token");
      const data = await getAllVisits(token);
      setVisits(data);
      setIsLoading(false);
    }
    response();
  },[]);
  return (
    <>
    <div>Visits</div>
    <Table responsive>
      <thead className='table-dark'>
        <tr>
          <th>#</th>
          <th>IP Address</th>
          <th>Email</th>
          <th>City</th>
          <th>Total visits</th>
          <th>Last visit</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <TableBodyLoading cols="7" rows="3"/>
        ):(
          <>
          {visits.map( (visit,index) => <TableRow visit={visit} index={index}key={index}/>)}
          </>
        )}
        
        
      </tbody>
    </Table>
    </>
  )
}