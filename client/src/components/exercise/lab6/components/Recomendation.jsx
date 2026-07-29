import React from "react";
import PropTypes from "prop-types";

const Recomendation = (props) => {
  const { aiRecommendation } = props;
  return (
    <div
      className="recommendation"
      tabIndex={0}
      alt={`AI Recommendation ${aiRecommendation ? "HIRE" : "DECLINE"}`}
    >
      <div
        className={`recommendation__card ${
          aiRecommendation ? "recommendation__hire" : "recommendation__reject"
        }`}
      >
        <div className="recommendation__img">AI</div>
        <div className="recommendation__textBox">
          <div className="recommendation__textContent">
            <div
              className={`recommendation__title  
                        ${
                          aiRecommendation
                            ? "recommendation__title_hire"
                            : "recommendation__title_reject"
                        }`}
            >
              {aiRecommendation ? "HIRE" : "REJECT"}
            </div>
            {/* <span className="span">Decline</span> */}
          </div>
          {/* <div className="recommendation__desc">Decline</div> */}
        </div>
      </div>
    </div>
  );
};

Recomendation.propTypes = {
  aiRecommendation: PropTypes.bool.isRequired,
};

export default Recomendation;
