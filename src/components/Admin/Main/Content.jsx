import React from 'react'
import { LinearChart } from './Charts/LinearChart'
import { PieChart } from './Charts/PieChart'
import { Summary } from './Summary'
import { Topbar } from './Topbar'

export const Content = () => {
  return (
    <div className="flex-fill pt-4 mt-5">
        <Topbar/>
        <div className="px-3">
            <h2>Dashboard</h2>
            <Summary/>
            <div className="chart-container pt-5 row">
              <div className='chart mb-5 col-12 col-md-6'>
                <LinearChart/>
              </div>
              <div className='chart col-12 col-md-6'>
                <PieChart/>
              </div>
            </div>
        </div>

    </div>
  )
}
