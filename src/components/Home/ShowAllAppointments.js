import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";

const ShowAllAppointments = () => {
  const [data, setData] = useState([]);
  const [totalAppointments, setTotalAppointments] = useState("");
  const [totalPendingAppointments, setTotalPendingAppointments] = useState("");
  const [totalDoneAppointments, setTotalDoneAppointments] = useState("");
  const [toggleBtn, setToggleBtn] = useState(true);

  const updateStatus = async (id)=>{
      await fetch(
        `https://doctorsapp-3e36e-default-rtdb.firebaseio.com/Appointment/${id}/.json`,
        {
          method: "PATCH",
          body: JSON.stringify({ appointment_status: "Done" }),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      console.log(data);

  }

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
        appoinment_status: data[key].appointment_status,
      });
    }
    const appointmentStatusCount = fetchedData.filter(
      (count) => count.appoinment_status === "pending"
    );
    const appointmentDoneStatusCount = fetchedData.filter(
      (count) => count.appoinment_status === "Done"
    );
  
    setData(fetchedData);
    setTotalDoneAppointments(appointmentDoneStatusCount.length)
    setTotalAppointments(fetchedData.length);
    setTotalPendingAppointments(appointmentStatusCount.length);
  }

  useEffect(() => {
    saveUser();
  },[data]);

  return (
    <div>
      <div className={classes.appointments_gripper}>
        <h2 className={classes.head}>Appointments</h2>
        {/* <div className={classes.tpBtns}><button></button><button></button></div>  */}

        <div className={classes.topTags}>
          <p>
            Total Appointments: <span>{totalAppointments}</span>
          </p>
          <p>
            Total Pending Appointments: <span>{totalPendingAppointments}</span>
          </p>
          <p>
            Total Done Appointments: <span>{totalDoneAppointments}</span>
          </p>
        </div>

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
                <p>
                  Appointment Status: <span> {item.appoinment_status} </span>
                </p>
                <br />
                <hr />
                <p>
                  Doctor Name : <span> {item.doctor} </span>
                </p>
                

              
            
                {item.appoinment_status  === 'pending' &&  <button
                  type="button"
                  className={classes.aftBtns}
                  onClick={()=>updateStatus(item.id)}
                >
                  Done
                </button>}
            
            
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowAllAppointments;
