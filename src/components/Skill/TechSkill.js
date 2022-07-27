import React from "react";
import useLanguage from "../../hooks/useLanguage";
import { TechItem } from "./TechItem";
import { Row, Col} from 'react-bootstrap';

export const TechSkill = () => {
  const {lang} = useLanguage();
  const techs = lang.skills.tech_skills.technologies
  return (
    
    <Row>
      {techs.map((tech,index) => (
        <Col md={12} lg={3} key={index}>
          <h2 className="text-lg-center">{tech.title}</h2>
          <Row className="ps-5 ps-md-0">
          {tech.technologies.map((item,index) => (
            <Col className="col-4 col-sm-2" lg={6} key={index}>
              <TechItem
                key={item.alt}
                name={item.name}
                image={item.image}
                color={item.className}
                alt={item.alt}
                />
            </Col>
          ))}
          </Row>
        </Col>
      ))}
    </Row>
  );
};
