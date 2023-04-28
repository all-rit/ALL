import React from "react";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { COLORS } from "../../../../constants/lab10";
import PropTypes from "prop-types";

const AIBias = (props) => {
    const { weights } = props;
    const weightList = [];

    /**
     * Gets the tailwind values from the COLORS array and uses that to index the weights array
     * Then sorts the array from greatest to least
     */
    const mapWeights = () => {
        COLORS.forEach((color) => {
            weightList.push(weights[color]);
        });
        weightList.sort((a, b) => b - a);
    };
    mapWeights();
    return (
        <div className="code_editor">
            <div className="code_editor__content">
                <div className="code_editor__files">
                    {/* AIBias.js */}
                    <div className="code_editor__file code_editor__file--active">
                        AIBias.js
                    </div>
                </div>

                {/* Description Comments */}
                <div className="code_editor__code">
                    {/*Begining of lab comments */}
                    <div className="code_editor__line">
                        <span className="code_editor__line--darkgreen">
                            &#47;&#47; The new bias for each color is shown in the config file
                            below
                        </span>
                        <br></br>
                    </div>

                    {/**/}
                    <div className="code_editor__line">
                        <span className="code_editor__const">const&nbsp;</span>
                        <span className="code_editor__json">biasConfig</span>
                        <span> &#61; </span>
                        <span className="code_editor__class">&#123;</span>
                        <br></br>
                        <div className="code_editor__line-background--light code__editor__json_value">
                            <span className="code_editor__line--blue">
                                &nbsp; {COLORS[0]}&#58;&nbsp;
                            </span>
                            <span className="">{weightList[0]}</span>
                        </div>
                        <br></br>
                        <div className="code__editor__json_value">
                            <span className="code_editor__line--blue">
                                &nbsp; {COLORS[1]}&#58;&nbsp;
                            </span>
                            <span className="code_editor__line-darkgold">
                                {weightList[1]}
                            </span>
                        </div>
                        <br></br>
                        <div className="code__editor__json_value">
                            <span className="code_editor__line--blue">
                                &nbsp; {COLORS[2]}&#58;&nbsp;
                            </span>
                            <span className="code_editor__line-darkgold">
                                {weightList[2]}
                            </span>
                        </div>
                    </div>

                    {/*End of file */}
                    <div className="code_editor__line">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="code_editor__line"></div>

                    <div className="code_editor__line">
                        <span className="code_editor__class">&#125;</span>
                        <span>&#59;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

AIBias.propTypes = {
    actions: PropTypes.object,
    weights: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...exerciseActions }, dispatch),
    };
};

const mapStateToProps = (state) => {
    const { weights } = state.exercise10;
    return { weights };
};

export default connect(mapStateToProps, mapDispatchToProps)(AIBias);
