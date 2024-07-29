import React from "react";
import "./apppages.css";
import TxtTerms from "./txtterms.js";

const TermsConditions = ({ prev }) => {
    const [checkedBox, setCheckedBox] = React.useState(false);
    return (
        <div className="page">
            <div className="termsconditions">
                <div className="terms">
                    <TxtTerms />
                </div>
            </div>
            <div className="checkbox">
                <input
                    type="checkbox"
                    checked={checkedBox}
                    onChange={(e) => setCheckedBox(e.target.checked)}
                />
                <label className="namec">
                    I agree to the terms and conditions
                </label>
            </div>
            <div className="buttons">
                <button className="button" onClick={prev}>
                    Back
                </button>
                <button className="button">Submit</button>
            </div>
        </div>
    );
};

export default TermsConditions;
