import React, { useState } from "react";
import ViewProject from "./viewProject.js";
import ViewUser from "./viewUser.js";

const ViewApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  // Switch Case to switch between ViewUser and ViewProject tabs
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ViewUser next={next} />;
      case 2:
        return <ViewProject prev={prev} />;

      default:
        return <ViewUser next={next} />;
    }
  };

  return <div className="page">{renderStep()}</div>;
};

export default ViewApplication;
