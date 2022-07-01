import React, { useState } from "react";
import classes from "./DoctorDetails.module.css";
import {
  BrowserRouter as Router,
  generatePath,
  Switch,
  Route,
  useHistory,
  useParams,
  Link,
} from "react-router-dom";
import BookAppoinment from "./BookAppoinment";

const DoctorsDetails = (props) => {
  const { userid } = useParams();

  const [ShowBooknow, setShowBooknow] = useState(false);
  const showBookNowHandler = () => {
    setShowBooknow(true);
  };

  console.log(userid);




  const filtered = props.doctorsData.filter((doctor) => {
    return doctor.id === userid;
  });

  return (
    <>
      {filtered.map((doctor) => {
        return (
          <div className={classes.doctorDetailsCard} key={doctor.id}>
            <div className={classes.docImage}>
              <img src={doctor.image} alt="" />
            </div>
            <div className={classes.docDetails}>
              {!ShowBooknow && (
                <>
                  <h6>
                    Doctor id: <span>{doctor.id}</span>
                  </h6>
                  <h3>
                    Name: <span>{doctor.name}</span>
                  </h3>
                  <p>
                    Age: <span>{doctor.age}</span>
                  </p>
                  <p>
                    Email: <span>{doctor.email}</span>
                  </p>
                  <p>
                    Speciality: <span>{doctor.speciality}</span>
                  </p>
                  <h4>
                    Fee : <span>{doctor.feeCharges} $</span>
                  </h4>
                </>
              )}
              <button className={classes.bookBtn} onClick={showBookNowHandler}>
                Book Apoinment
              </button>
              <br />
              <br />
              {ShowBooknow && (
                <div>
                  <BookAppoinment
                    docName={doctor.name}
                    docEmail={doctor.email}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DoctorsDetails;
