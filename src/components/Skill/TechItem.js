import React from "react";

export const TechItem = (props) => {
  return (
    <div className="skill-item me-5 mb-3 d-flex flex-column center w-100">
      <img
        className="skill-img"
        src={require(`./../../assets/images/technologies/${props.image}`)}
        alt={props.alt}
      />
      <span className={`fs-5 text-center text-tech ${props.color}`}>
        {props.name}
      </span>
    </div>
  );
};
