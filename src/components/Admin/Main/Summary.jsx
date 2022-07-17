import React from "react";
import { SummaryBox } from "./SummaryBox";
import { Row } from "react-bootstrap";
export const Summary = ({summary,isLoading}) => {
  const {visitors,messages,whitelist,projects} = summary;
  return (
    <Row className="summary-container w-100 g-3">
      <SummaryBox
        bgColor="bg-primary"
        data={visitors}
        isLoading={isLoading}
      />
      <SummaryBox
        bgColor="bg-green-light"
        data={messages}
        isLoading={isLoading}
      />
      <SummaryBox
        bgColor="bg-info"
        data={whitelist}
        isLoading={isLoading}
      />
      <SummaryBox
        bgColor="bg-warning"
        data={projects}
        isLoading={isLoading}
      />
    </Row>
  );
};
