import React, { useState } from "react";
import "./apppages.css";

const ProjectDetails = ({ prev, next }) => {
    const [projectType, setProjectType] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectNumber, setProjectNumber] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState(false);

    const projectTypeList = [
        { value: 0, label: "Web Development" },
        { value: 1, label: "App Development" },
        { value: 2, label: "Machine Learning" },
    ];

    const locationlist = [
        { value: 0, label: "Bangalore" },
        { value: 1, label: "Hyderabad" },
        { value: 2, label: "Chennai" },
    ];

    const changeProjectName = (event) => {
        const newProjectName = event.target.value;
        setProjectName(newProjectName);
    };

    const changeProjectNumber = (event) => {
        const newProjectNumber = event.target.value;
        setProjectNumber(newProjectNumber);
    };

    const changeProjectDescription = (event) => {
        const newProjectDescription = event.target.value;
        setProjectDescription(newProjectDescription);
    };

    const changeStartDate = (event) => {
        const newStartDate = event.target.value;
        setStartDate(newStartDate);
    };

    const changeEndDate = (event) => {
        const newEndDate = event.target.value;
        setEndDate(newEndDate);
    };

    const reset = () => {
        setProjectType("");
        setProjectName("");
        setProjectNumber("");
        setProjectDescription("");
        setStartDate("");
        setEndDate("");
        setLocation("");
    };

    const test = () => {
        if (
            projectType === "" ||
            projectName === "" ||
            projectNumber === "" ||
            projectDescription === "" ||
            startDate === "" ||
            endDate === "" ||
            location === ""
        ) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const trynext = () => {
        const hasError = test();
        setError(hasError);
        if (!hasError) {
            next();
        }
    };

    return (
        <div className="page">
            <div className="list">
                <label className="name"> Project type: </label>
                <select
                    className="dropdown"
                    value={projectType}
                    onChange={(a) => setProjectType(a.target.value)}
                >
                    <option value="">Select</option>
                    {projectTypeList.map((type) => (
                        <option value={type.value}>{type.label}</option>
                    ))}
                </select>
                <div className="error">
                    {error === true && projectType === "" ? (
                        <label className="invalid">
                            Please chose a project type
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="inputboxes">
                <label className="name">Project Name: </label>
                <input
                    onChange={changeProjectName}
                    value={projectName}
                    className="input"
                    placeholder="ex: Project Name"
                ></input>
                <div className="error">
                    {error === true && projectName === "" ? (
                        <label className="invalid">
                            Please enter a project name
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="inputboxes">
                <label className="name">Project Number: </label>
                <input
                    onChange={changeProjectNumber}
                    value={projectNumber}
                    className="input"
                    placeholder="ex: A1234"
                ></input>
                <div className="error">
                    {error === true && projectNumber === "" ? (
                        <label className="invalid">
                            Please enter a valid Project Number
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="textinput">
                <label className="name">Description: </label>
                <textarea
                    onChange={changeProjectDescription}
                    value={projectDescription}
                    className="textarea"
                    placeholder="ex: Project Description"
                ></textarea>
                <div className="error">
                    {error === true && projectDescription === "" ? (
                        <label className="invalid">
                            Please enter a project description
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="inputboxes">
                <label className="name">Start Date: </label>
                <input
                    type="date"
                    onChange={changeStartDate}
                    value={startDate}
                />
                <div className="error">
                    {error === true && startDate === "" ? (
                        <label className="invalid">
                            Please enter a start date
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="inputboxes">
                <label className="name">End Date: </label>
                <input type="date" onChange={changeEndDate} value={endDate} />
                <div className="error">
                    {error === true && endDate === "" ? (
                        <label className="invalid">
                            Please enter a end date
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="list">
                <label className="name"> Location: </label>
                <select
                    className="dropdown"
                    value={location}
                    onChange={(a) => setLocation(a.target.value)}
                >
                    <option value="">Select</option>
                    {locationlist.map((edu) => (
                        <option value={edu.value}>{edu.label}</option>
                    ))}
                </select>
                <div className="error">
                    {error === true && location === "" ? (
                        <label className="invalid">
                            Please chose your education
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="buttons">
                <button className="button" onClick={prev}>
                    Previous
                </button>
                <button className="button" onClick={reset}>
                    Reset
                </button>
                <button className="button" onClick={trynext}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProjectDetails;
