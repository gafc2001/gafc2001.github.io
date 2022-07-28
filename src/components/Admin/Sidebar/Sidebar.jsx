import React from 'react'
import MenuItem from './MenuItem'

export const Sidebar = ({toggle}) => {
    return (
        <div className='position-relative'>
            <aside className={`${toggle?"show-sidebar":""} h-screen sidebar text-light`}>
                <div className="sidebar-fixed">
                    <div className='d-flex align-items-center border-bottom border-secondary px-2 mb-3 title-sidebar'>
                        <h1 className="w-100">
                            <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="icon" className='img-fluid' width="30"/>
                            <span className="h3 m-0 ms-1">GAFC2001</span>
                        </h1>
                    </div>
                    <div className='p-2'>
                        <nav className='main-navbar'>
                            <ul className='ps-0'>
                                <MenuItem to="/superdashboard" active text="Dashboard" icon="fas fa-chart-pie"/>
                                <MenuItem to="messages" text="Messages" icon="fas fa-globe-americas"/>
                                <MenuItem to="visits" text="Visits" icon="fas fa-envelope"/>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        </div>
    )
}
