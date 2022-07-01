import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Home/Home";
import DoctorsDetails from "./components/Home/DoctorDetilsPage/DoctorsDetails";
import BookAppoinment from "./components/Home/DoctorDetilsPage/BookAppoinment";
import ShowAllAppointments from "./components/Home/ShowAllAppointments";

function App() {

  const DUMMY_DOCTORS = [
    {
      id: "D1",
      name: "Lucius Elliston",
      age: "44",
      speciality: "Heart Doctor",
      email: "Lucius@mail.com",
      image: "https://i.pinimg.com/originals/33/a6/2c/33a62c0360c08734f0c1cfd1289e47c5.jpg",
      feeCharges: "80",
    },
    {
      id: "D2",
      name: "Walter Livermore",
      age: "44",
      speciality: "Children Doctor",
      email: "Walter@mail.com",
      image: "https://i.pinimg.com/originals/ca/9f/b7/ca9fb724cfcdbe927a522c63c3f0d687.jpg",
      feeCharges: "40",
    },
    {
      id: "D3",
      name: "Finley Tasker",
      age: "44",
      speciality: "Heart Doctor",
      email: "Finley@mail.com",
      image: "https://i.pinimg.com/736x/61/4b/cb/614bcb5121b904209544a9f6cebaca6c.jpg",
      feeCharges: "97",
    },
    {
      id: "D4",
      name: "Annabelle Walter",
      age: "44",
      speciality: "Heart Doctor",
      email: "Annabelle@mail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ70uQaclzdUIyDsRHZbH0uwnH_vekHY_A7A&usqp=CAU",
      feeCharges: "100",
    },
    {
      id: "D5",
      name: "Mack Lucas",
      age: "44",
      speciality: "Children Doctor",
      email: "Mack@mail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpC26EFHBrJUGAa5ZayD_vlkaLK91Kk67PsdW30prPi8i7DND-_agiPLpjbj-pE7i2w4&usqp=CAU",
      feeCharges: "150",
    },
    {
      id: "D6",
      name: "Isobel Adlam",
      age: "44",
      speciality: "Children Doctor",
      email: "Isobel@mail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6sNDBcs0-yGS8eDXBf5LXduWLM7rSL_W9Q&usqp=CAU",
      feeCharges: "60",
    },
    {
      id: "D7",
      name: "Jacob Corcoran",
      age: "44",
      speciality: "Heart Doctor",
      email: "Jacob@mail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekQFtUA3Y00TlbSl12cuVIAcL3E535I0qFY9J44AwpmBHdQpt7MvXV2H63w3S03U6qu0&usqp=CAU",
      feeCharges: "80",
    },
    {
      id: "D8",
      name: "Fletcher Duff",
      age: "44",
      speciality: "Heart Doctor",
      email: "Fletcher@mail.com",
      image: "https://www.volumecoder.com/templates/medical/img/team/single-doctor.jpg",
      feeCharges: "120",
    },
    {
      id: "D9",
      name: "Cameron Keight",
      age: "44",
      speciality: "Children Doctor",
      email: "Cameron@mail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLjOhlvHdQWlKpuBt3DCK2m7DRDJI0-ad0bP5AM4HcSbJODuBmLyPmBCwCu4aIYHD-ag&usqp=CAU",
      feeCharges: "50",
    },
    {
      id: "D10",
      name: "Lee Emmery",
      age: "44",
      speciality: "Children Doctor",
      email: "Lee@mail.com",
      image: "https://hellojivan.com/assets/websites/assets/img/doctors/doctor-thumb-02.jpg",
      feeCharges: "70",
    },
  ];


  

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<Navigate to="/home"/>} />
        <Route path="/Home" exact element={<Home doctorsData = {DUMMY_DOCTORS} />} />
        {/* <Route path="/DoctorsDetails" exact element={<DoctorsDetails />} /> */}
        <Route path="/DoctorDetails/:userid" exact element={<DoctorsDetails doctorsData = {DUMMY_DOCTORS} />} />
        <Route path="/BookAppoinment" exact element={<BookAppoinment doctorsData = {DUMMY_DOCTORS}/>} />
        

        <Route path="/ShowAllAppointments" exact element={<ShowAllAppointments/>} />

        
        
      </Routes>
    </React.Fragment>
  );
}

export default App;
