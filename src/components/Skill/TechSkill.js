import React from "react";
import useLanguage from "../../hooks/useLanguage";
import { TechItem } from "./TechItem";

export const TechSkill = () => {
  const {lang} = useLanguage();
  const techs = lang.skills.tech_skills.technologies
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
