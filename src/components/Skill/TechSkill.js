import React from "react";
import { TechItem } from "./TechItem";

export const TechSkill = ({techs}) => {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {techs.map((item) => (
        <TechItem
          key={item.alt}
          name={item.name}
          image={item.image}
          className={item.className}
          alt={item.alt}
        />
      ))}
    </div>
  );
};
