import * as React from "react";
import { Content_Card } from "./Content_Card";
import contentCards from "../../../constants/educatorsContent/educator-cards";

export default function Content_Page() {
  const cards = contentCards.map((card) => {
    return <Content_Card key={card.Key} Card={card} />;
  });
  return <div>{cards}</div>;
}
