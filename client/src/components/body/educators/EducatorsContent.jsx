import * as React from "react";
import { Content_Card } from "./Content_Card";
import contentCards from "../../../constants/educatorsContent/educator-cards";

const EducatorsContent = () => {
  return contentCards.map((card) => {
    return <Content_Card key={card.Key} Card={card} />;
  });
};

export default EducatorsContent;
