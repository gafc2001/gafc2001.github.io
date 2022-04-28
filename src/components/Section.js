import React from 'react'

export const Section = (props) => {
  return (
    <section className="section container-lg my-5" id="skills">
        <div className="title-container">
            <h2 className="title">{props.title}</h2>
        </div>
        {props.children}
    </section>
  )
}
