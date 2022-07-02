import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import classes from "./BookAppoinment.module.css";

const BookAppoinment = (props) => {
const params=useParams();
const [appointmentCheck,setAppointmentCheck]=useState(true);
const [patientAppointment,setPatientAppointment]=useState([]);

 const navigate = useNavigate()
 const [loading, setLoading] = useState(false)

    const [input, setInput] = useState({
        doctor:props.docName,
        doctorEmail:props.docEmail,
        userName: "",
        disease: "",
        patientEmail: "",
      });

      const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      let doctor = input.doctor
      let doctorEmail = input.doctorEmail
      let userName = input.userName
      let disease = input.disease
      let patientEmail = input.patientEmail

      const data = {
        doctor,
        doctorEmail,
        userName,
        disease,
        patientEmail,
        appointment_status:'pending',
        doctor_Id:params.userid
      };

      
      async function saveUser(e){
        e.preventDefault();
if(patientAppointment.length === 1)
{
alert('jashfkjsdahfkjdshfj')
}else{
  await fetch(
    "https://doctorsapp-3e36e-default-rtdb.firebaseio.com/Appointment.json",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  navigate('/ShowAllAppointments', {replace:true})
}
        
      }

      const fetchAppointData = async() =>{

        setLoading(true)
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
        const doctorPendingAppointment=fetchedData.filter((count)=>count.doctor_Id === params.userid && count.appoinment_status === 'pending');

        const patientCheckAppointment=fetchedData.filter((count)=>count.userName === input.userName && count.appoinment_status === 'pending' );
        setPatientAppointment(patientCheckAppointment)

        if(doctorPendingAppointment.length === 2 || doctorPendingAppointment.length > 2)
        {
setAppointmentCheck(false)
        }
        setLoading(false)
      }
      useEffect(() => {
        fetchAppointData()
      })
  return (
    <React.Fragment>
      <div>

     

       {appointmentCheck && <form onSubmit={saveUser}>
        <h5 className={classes.bkHead}>Book Your Appointment With <span className={classes.glow}>{input.doctor}</span>  </h5>
        <div className={classes.input_group}>
          <label htmlFor="">Doctor Name</label>
          <input type="text" name="doctor" value={input.doctor} onChange={onInputChange} readOnly />
        </div>

        <div className={classes.input_group}>
          <label htmlFor="">Doctor Email</label>
          <input type="text" name="doctorEmail" value={input.doctorEmail} onChange={onInputChange} readOnly />
        </div>

        <p>------------------Fill Patient Form------------------</p>

        <div className={classes.input_group}>
          <label htmlFor="">Name</label>
          <input type="text" name="userName" placeholder="Enter name" value={input.userName}  required onChange={onInputChange} />
        </div>

        <div className={classes.input_group}>
          <label htmlFor="">Disease</label>
          <input type="text" name="disease" placeholder="Enter Disease" value={input.disease}  required onChange={onInputChange} />
        </div>

        <div className={classes.input_group}>
          <label htmlFor="">Email of Patient</label>
          <input type="text" name="patientEmail" placeholder="Enter Patient Email" value={input.patientEmail}  required onChange={onInputChange} />
        </div>

        
        <button type="submit">submit</button>
        </form>}
        {!appointmentCheck && <h2>Patient count is full ...</h2>}
      </div>
    </React.Fragment>
  );
};

export default BookAppoinment;
