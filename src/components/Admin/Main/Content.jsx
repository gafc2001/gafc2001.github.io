import React from 'react'
import { MainNavbar } from './MainNavbar'
import { Summary } from './Summary'

export const Content = () => {
  return (
    <div className="flex-fill pt-4 mt-5">
        <MainNavbar/>
        <div className="px-4">
            <h2>Dashboard</h2>
            <Summary/>
        </div>
    </div>
  )
}
