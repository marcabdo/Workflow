import React, { useState } from "react";

const UserDetails = ({ next, appSession }) => {
    const userDetails = appSession.application.userDetails;

    // All entries are stored in state
    const [firstname, setFirst] = useState(userDetails.firstname || "");
    const [lastname, setLast] = useState(userDetails.lastname || "");
    const [number, setNumber] = useState(userDetails.number || "");
    const [email, setEmail] = useState(userDetails.email || "");
    const [gender, setGender] = useState(userDetails.gender || "");
    const [education, setEducation] = useState(userDetails.education || "");
    const [error, setError] = useState(false);

    // Preset education list
    const educationlist = [
        { value: 0, label: "B.Tech" },
        { value: 1, label: "M.Tech" },
        { value: 2, label: "MBBS" },
    ];

    // Functions to change state
    const changeFirst = (event) => {
        const newfirst = event.target.value;
        setFirst(newfirst);
    };

    const changeLast = (event) => {
        const newlast = event.target.value;
        setLast(newlast);
    };

    const changeNum = (event) => {
        if (
            event.target.value.length < 11 &&
            !isAlphabetic(event.target.value)
        ) {
            const newnumber = event.target.value;
            setNumber(newnumber);
        }
    };

    const changeEmail = (event) => {
        const newemail = event.target.value;
        setEmail(newemail);
    };

    const reset = () => {
        setFirst("");
        setLast("");
        setNumber("");
        setEmail("");
        setGender("");
        setEducation("");
        setError(false);
    };

    function isAlphabetic(str) {
        if (str.length === 0) return false;
        return !/^\d+$/.test(str);
    }

    function isValidEmailAddress(address) {
        return address.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g);
    }

    const test = () => {
        if (firstname === "") {
            return true;
        } else if (lastname === "") {
            return true;
        } else if (number === "" || number.length < 10) {
            return true;
        } else if (email === "" || !isValidEmailAddress(email)) {
            return true;
        } else if (gender === undefined) {
            return true;
        } else if (education === "") {
            return true;
        }
        return false;
    };

    const trynext = () => {
        const hasError = test();
        setError(hasError);
        if (!hasError) {
            userDetails.firstname = firstname;
            userDetails.lastname = lastname;
            userDetails.number = number;
            userDetails.email = email;
            userDetails.gender = gender;
            userDetails.education = education;
            next();
        }
    };

    return (
        <div className="page">
            <div className="inputboxes">
                <label className="name">First Name: </label>
                <input
                    onChange={changeFirst}
                    value={firstname}
                    className="input"
                    placeholder="ex: John"
                ></input>
                <div className="error">
                    {error === true && firstname === "" ? (
                        <label className="invalid">
                            Please enter your first name
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="inputboxes">
                <label className="name">Last Name: </label>
                <input
                    onChange={changeLast}
                    value={lastname}
                    className="input"
                    placeholder="ex: Doe"
                ></input>
                <div className="error">
                    {error === true && lastname === "" ? (
                        <label className="invalid">
                            Please enter your last name
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="inputboxes">
                <label className="name">Phone Number: </label>
                <input
                    onChange={changeNum}
                    value={number}
                    className="input"
                    placeholder="ex: 579 421 6455"
                ></input>
                <div className="error">
                    {error === true && (number === "" || number.length < 10) ? (
                        <label className="invalid">
                            Please enter a valid phone number
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="inputboxes">
                <label className="name">Email Adress: </label>
                <input
                    onChange={changeEmail}
                    value={email}
                    className="input"
                    type="email"
                    placeholder="ex: name@email.com"
                ></input>
                <div className="error">
                    {error === true &&
                    (email === "" || !isValidEmailAddress(email)) ? (
                        <label className="invalid">
                            Please enter a valid email adress
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="radio">
                <label className="name">Gender: </label>
                <div className="input">
                    <input
                        type="radio"
                        value="Male"
                        name="gender"
                        className="radioButton"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "Male"}
                    />{" "}
                    Male
                    <input
                        type="radio"
                        value="Female"
                        name="gender"
                        className="radioButton"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "Female"}
                    />{" "}
                    Female
                </div>
                <div className="error">
                    {error === true && gender === undefined ? (
                        <label className="invalid">
                            Please select your gender
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="list">
                <label className="name"> Education: </label>
                <select
                    className="dropdown"
                    value={education}
                    onChange={(a) => setEducation(a.target.value)}
                >
                    <option value="">Select</option>
                    {educationlist.map((edu) => (
                        <option value={edu.value}>{edu.label}</option>
                    ))}
                </select>
                <div className="error">
                    {error === true && education === "" ? (
                        <label className="invalid">
                            Please chose your education
                        </label>
                    ) : null}
                </div>
            </div>

            <div className="buttons">
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

export default UserDetails;
