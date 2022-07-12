import React from "react";
import { SummaryBox } from "./SummaryBox";
import { Row } from "react-bootstrap";
export const Summary = () => {
  return (
    <Row className="summary-container">
      <SummaryBox
        bgColor="bg-primary"
        value="30"
        icon="fas fa-globe-americas"
        text="Visitors"
      />
      <SummaryBox
        bgColor="bg-green-light"
        value="30"
        icon="fas fa-envelope"
        text="Messages"
      />
      <SummaryBox
        bgColor="bg-info"
        value="30"
        icon="fas fa-desktop"
        text="Whitelist devices"
      />
      <SummaryBox
        bgColor="bg-warning"
        value="30"
        icon="fas fa-rocket"
        text="Projects"
      />
    </Row>
  );
};
