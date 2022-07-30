import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItem = ({text,icon,to}) => {
  return (
    
    <li className="menu-item">
        <NavLink to={to} end
        className={(({isActive}) => {
          const styles = "d-block py-2 px-3 w-100 h-100 text-light text-decoration-none rounded rounded-3 mb-1";
          const activeStyle = (isActive?"active":"");
          return `${styles} ${activeStyle}`;
        })}>
          <i className={icon}></i>
          <span className="ms-2">
              {text}
          </span>
        </NavLink>
    </li>
  )
}

export default MenuItem