import React from 'react'
import DoctorCards from './DoctorCards'
import classes from './Home.module.css'

const Home = ({doctorsData}) => {

  // console.log(doctorsData)

  return (

    <div className={classes.Gripper_container}>
        
        <DoctorCards doctorsData={doctorsData}/>

    </div>
  )
}


export default Home