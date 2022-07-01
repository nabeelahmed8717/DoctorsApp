import React, { useState,useEffect } from "react";
import classes from "./DoctorDetails.module.css";
import {
  BrowserRouter,
  useParams,
  Link,
} from "react-router-dom";
import BookAppoinment from "./BookAppoinment";

const DoctorsDetails = (props) => {
  const { userid } = useParams();

  const [ShowBooknow, setShowBooknow] = useState(false);
  const [totalPendingAppointments, setTotalPendingAppointments] = useState("");
  const [totalDoneAppointments, setTotalDoneAppointments] = useState("");
  const showBookNowHandler = () => {
    setShowBooknow(true);
  };

  const fetchAppointmentData= async() =>{
    const response = await fetch(
      "https://doctorsapp-3e36e-default-rtdb.firebaseio.com/Appointment.json"
    );
  
    const data = await response.json();
  
    const fetchedData = [];
    for (const key in data) {
      fetchedData.push({
        id: key,
        disease: data[key].disease,
        userName: data[key].userName,
        doctor: data[key].doctor,
        doctorEmail: data[key].doctorEmail,
        patientEmail: data[key].patientEmail,
        userName: data[key].userName,
        appoinment_status:data[key].appointment_status,
        doctor_Id:data[key].doctor_Id
      });
    }
    const appointmentStatusCount = fetchedData.filter(
      (count) =>count.doctor_Id===userid && count.appoinment_status === "pending"
    );
    const appointmentDoneStatusCount = fetchedData.filter(
      (count) => count.doctor_Id===userid && count.appoinment_status === "Done"
    );
    setTotalPendingAppointments(appointmentStatusCount.length);
    setTotalDoneAppointments(appointmentDoneStatusCount.length)
  };
  
useEffect(()=>{
  fetchAppointmentData();
})



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
                  <h4>
                    Total Earnings : <span>{Number(totalDoneAppointments)*Number(doctor.feeCharges)} $</span>
                  </h4>
                  <h4>
                    Total Pending Appointments : <span>{totalPendingAppointments} </span>
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
