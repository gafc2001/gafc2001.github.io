import React from 'react'
import MenuItem from './MenuItem'

export const Sidebar = () => {
  return (
    <aside className='h-screen sidebar text-light'>
        <div className='d-flex align-items-center border-bottom border-secondary px-2 mb-3'>
            <h1 className="w-100">
                <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="icon" className='img-fluid' width="30"/>
                <span className="h3 m-0 ms-1">GAFC2001</span>
            </h1>
        </div>
        <div className='p-2'>
            <nav className='main-navbar'>
                <ul className='ps-0'>
                    <MenuItem active text="Dashboard" icon="fas fa-chart-pie"/>
                    <MenuItem text="Messages" icon="fas fa-envelope"/>
                </ul>
            </nav>
        </div>
    </aside>
  )
}
