import { generatePath, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import classes from "./Home.module.css";

const DoctorCards = (props) => {
  console.log(props.doctorsData);
  const navigate = useNavigate();

  const handleProceed = (userid) => {
    userid && navigate(generatePath("/DoctorDetails/:userid", { userid }));
  };

  return (
    <React.Fragment>
      {props.doctorsData?.map((item) => {
        return (
          <div className={classes.Doctor_card} key={item.id}>
            <div className={classes.doc_IMG}>
              <img src={item.image} alt="" />
            </div>
            <div className={classes.doc_DIS}>
              <h6>
                Doctor id: <span>{item.id}</span>
              </h6>
              <h3>
                Name: <span>{item.name}</span>
              </h3>
              <p>
                Age: <span>{item.age}</span>
              </p>
              <p>
                Email: <span>{item.email}</span>
              </p>
              <div className={classes.speciality_badge}>
                <span>Speciality: </span>
                <p>
                  <span>{item.speciality}</span>
                </p>
              </div>
              <h4>
                Fee : <span>{item.feeCharges} $</span>
              </h4>

              <button
                className={classes.aftBtns}
                onClick={(e) => {
                  handleProceed(item.id);
                }}
              >
                proceed
              </button>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default DoctorCards;
