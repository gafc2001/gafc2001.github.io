import React from 'react'
import { LinearChart } from './LinearChart'
import { MainNavbar } from './MainNavbar'
import { Summary } from './Summary'

export const Content = () => {
  return (
    <div className="flex-fill pt-4 mt-5">
        <MainNavbar/>
        <div className="px-3">
            <h2>Dashboard</h2>
            <Summary/>
            {/* <div className="chart-container">
              <LinearChart/>
            </div> */}
        </div>

    </div>
  )
}
