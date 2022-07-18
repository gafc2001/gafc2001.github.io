import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { dashboardService } from '../../../services/Dashboard'
import { LinearChart } from './Charts/LinearChart'
import { PieChart } from './Charts/PieChart'
import { Summary } from './Summary'
import { Topbar } from './Topbar'
export const Content = ({setToggle,toggle}) => {
  const [summary, setSummary] = useState({});
  const [visitors, setVisitors] = useState({});
  const [visitorsPerCountry, setVisitorsPerCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  
    const request = async () => {
      const token = localStorage.getItem("auth_token");
      const response = await dashboardService(token);
      setSummary(response.summary);
      setVisitors(response.visitors);
      setVisitorsPerCountry(response.visitors_per_country);
      setIsLoading(false);
    } 
    request();
  },[]);
  return (
    <div className={`flex-fill pt-4 mt-5 ${toggle?"shadow":""}`}>
        <Topbar setToggle={setToggle} toggle={toggle}/>
        <div className="px-3">
            <h2>Dashboard</h2>
            <Summary summary={summary??null} isLoading={isLoading}/>
            <div className="chart-container pt-5 row">
              <div className='chart mb-5 col-12 col-md-6'>
                <LinearChart visitors={visitors}/>
              </div>
              <div className='chart col-12 col-md-6'>
                <PieChart visitors={visitorsPerCountry}/>
              </div>
            </div>
        </div>

    </div>
  )
}
