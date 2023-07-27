import * as React from "react";
import { navigate } from "@reach/router";

Educator_Resource_Card.propTypes = {
  Card: {
    cardImage: "",
    cardTitle: "",
    cardLink: "",
    cardLinkTag: "",
    cardBody: "",
  },
};
export function Educator_Resource_Card(props) {
  return (
    <div className=" module__col module__lab_col educator-card-span">
      <span>
        <img
          className="img-fluid module__image module__educators_image"
          src={props.Card.cardImage}
          alt={"Card Image"}
        />
      </span>
      <ul className="module__caption">
        <li className="tw-mt-3 tw-mb-0 module__title module__lab_title">
          <a
            className={
              "tw-text-dark tw-text-3xl tw-font-semibold tw-tracking-wide"
            }
            onClick={() => navigate(props.Card.cardLink)}
          >
            {props.Card.cardTitle}
          </a>
          <ul className="tw-mt-5 tw-mb-5">
            <li>
              <a
                className="tw-mb-0 tw-font-labBlue tw-text-xl tw-tracking-wide"
                href={props.Card.cardLink}
              >
                {props.Card.cardLinkTag}
              </a>
            </li>
          </ul>
          <ul className={"tw-text-labGreen tw-mb-3"}>
            <li>{props.Card.cardBody}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
