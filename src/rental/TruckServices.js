import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import './TruckService.css';
import logo from './rental.jpg'
import Items from './Items';
import Navbar from './Navbar';
import RentalGoogleMap from './RentalGoogleMap';
import Zoom from "react-reveal/Zoom"
import ProgressBar from './ProgressBar';
import MuiStepper from '../steper/MuiStepper'



const TruckServices = () => {

  const [astepper,setasteper] = useState(-0);

  // useEffect(() => {
  //   // document.body.style.overflowY = "hidden";
  //   return () => {
  //     // document.body.style.overflowY = "scroll";
  //     setasteper(astepper+1);
  //   };
  // }, []);

  console.log(astepper)

       
  return (
      <>
      <MuiStepper isPositionFixed={true} astepper={astepper}/>
      <div className='listContainer'>
          {/* <div className='texty'>
            Choose the rental Service Location and Time
          </div> */}
        <div className='listWrapper' >

        <div className='listSearch' >
            {/* <h1 className='IsTitle'>Google Map</h1> */}
            <RentalGoogleMap/>
            </div>


          <div className='ListResult' >
            {/* <Zoom  duration={1500}> */}
            <Items />
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items />
            <Items/>
            {/* </Zoom> */}
          </div>

         
        </div>
      </div>
            
      </>
  );

}

export default TruckServices