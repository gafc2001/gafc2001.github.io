import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({active,text,icon,to}) => {
  return (
    <li className={`menu-item ${active?"active shadow-lg":""} py-2 px-3 rounded rounded-3 mb-1`}>
        <Link to={to} className="text-light text-decoration-none">
          <i className={icon}></i>
          <span className="ms-2">
              {text}
          </span>
        </Link>
    </li>
  )
}

export default MenuItem