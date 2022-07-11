import React from 'react'

const MenuItem = ({active,text,icon}) => {
  return (
    <li className={`menu-item ${active?"active shadow-lg":""} py-2 px-3 rounded rounded-3 mb-1`}>
        <i className={icon}></i>
        <span className="ms-2">
            {text}
        </span>
    </li>
  )
}

export default MenuItem