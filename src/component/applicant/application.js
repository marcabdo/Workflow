import React, { useState } from "react";
import UserDetails from "./userDetails.js";
import ProjectDetails from "./projectDetails.js";
import TermsConditions from "./termsConditions.js";
import AppSession from "../Library/appSession.js";

// Create an instance of AppSession
const appSession = new AppSession();

const Application = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const next = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <UserDetails next={next} appSession={appSession} />;
            case 2:
                return <ProjectDetails prev={prev} next={next} />;
            case 3:
                return <TermsConditions prev={prev} />;

            default:
                return <UserDetails next={next} appSession={appSession} />;
        }
    };

    return <div className="page">{renderStep()}</div>;
};

export default Application;
