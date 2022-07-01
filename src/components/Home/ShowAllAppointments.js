import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";

const ShowAllAppointments = () => {
  const [data, setData] = useState([]);
  const [totalAppointments, setTotalAppointments] = useState('')
  const [totalPendingAppointments, setTotalPendingAppointments] = useState('')

  async function saveUser() {
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
        appoinment_status:data[key].appointment_status
      });
    }
const appointmentStatusCount=fetchedData.filter((count)=>count.appoinment_status==='pending')
    setData(fetchedData);
    setTotalAppointments(fetchedData.length)
    setTotalPendingAppointments(appointmentStatusCount.length);
    console.log("data", data);
  }

  useEffect(() => {
    saveUser();
  }, []);

  return (
    <div>
      <div className={classes.appointments_gripper}>
        <h2 className={classes.head}>Appointments</h2>
        {/* <div className={classes.tpBtns}><button></button><button></button></div>  */}
         
         <div className={classes.topTags}><p>Total Appointments: <span>{totalAppointments}</span></p> | <p>Total Pending Appointments: <span>{totalPendingAppointments}</span></p></div>

        <div className={classes.flexCol}>


        {data.map((item) => {
          return (
              <div className={classes.appointments_data} key={item.id}>
                <h3>
                  Patient Name : <span>{item.userName}</span>
                </h3>
                <p>
                  Disease : <span> {item.disease} </span>
                </p>
                <p>
                  Patient's Email : <span> {item.patientEmail} </span>
                </p>
                <br />
                <hr />
                <p>
                  Doctor Name : <span> {item.doctor} </span>
                </p>
              </div>
          );
        })}
        </div>
        
      </div>
    </div>
  );
};

export default ShowAllAppointments;
