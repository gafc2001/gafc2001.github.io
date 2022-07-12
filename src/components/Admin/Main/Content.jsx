import React from 'react'
import { MainNavbar } from './MainNavbar'
import { Summary } from './Summary'

export const Content = () => {
  return (
    <div className="flex-fill mt-4">
        <MainNavbar/>
        <div className="p-5">
            <Summary/>
        </div>
    </div>
  )
}
