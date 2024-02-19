import React, { useEffect, useState } from 'react'
import Shortby from './common/Shortby/ShortBy'
import { Link } from 'react-router-dom'
import './remaining_addon/trucktype1.css'
import SideBar from './SideBar/SideBar';
import { Button } from '@mui/material';
// import second from 'first'
import {useNavigate} from 'react-router-dom'
import MuiStepper from '../steper/MuiStepper';

const TruckRender = () => {
  const[num,setNum]=useState(0);
  // const [astepper,setasteper] = useState(0);
  
  const incNum=()=>{
    if(num<3)
      setNum(num+1)
    
  }
  const decNum=()=>{
    if(num>0)
      setNum(num-1)
  }

  const navigate = useNavigate();

  const goToRegistration =()=>{

    console.log("akshay")
    navigate('/addon');
}


// useEffect(() => {
//   // document.body.style.overflowY = "hidden";
//   return () => {
//     // document.body.style.overflowY = "scroll";
//     setasteper(astepper+1);
//   };
// }, []);

// console.log(astepper)

const [astepper,setasteper] = useState(-1);

  return (
    <>
    <div className='topmarg'>
      <MuiStepper isPositionFixed={true} astepper={astepper}/>
    </div>
    <div className="combiness">
        <SideBar/>
      <div className="combine-page">
        <Shortby/>

    <div className="searchItems1">
      <div className="img_2">

    <img
      src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/carouselimageswithouttext/vehicles/pickup-trucks/OQAR_22_ThreeFourths%20Ton%20Pickup_AngularFront_US-ENG.png"
      alt=""
      className="siImg"
      
    /><img src="https://www.enterprisetrucks.com/truckrental/en_US/_jcr_content/header-ipar/pageheader/header-logo.coreimg.png/1649207221168/en-logo-195x84.png" alt="" width={40} height={20} 
    className='service_providers1'/>
      </div>
    
    <div className="siDesc">
      <h1 className="siTitle">3/4 Ton Pickup Truck</h1>
     
      <span className="siSubtitle">
      GMC SIERRA 2500 CREW CAB OR SIMILAR
      </span>
      
      <span className="siFeatures">
      Towing Capable
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>


    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">₹1162.00</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <div className="amount-vehicle">
                      
                        <Button size='large' onClick={decNum}>-</Button>
                        <span>{num}</span>
                        <Button onClick={incNum}>+</Button>
                        </div>
                  
        <Link to='/service'>
        <button className="siCheckButton" >See availability</button>
        
        </Link>
      </div>
    </div>
    </div>
    <div className="searchItems1">
      <div className="img_2">

    <img
      src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/carouselimageswithouttext/vehicles/pickup-trucks/OQAR_22_ThreeFourths%20Ton%20Pickup_AngularFront_US-ENG.png"
      alt=""
      className="siImg"
      
    /><img src="https://www.logisticmart.com/style/images/logo.png" alt="" width={40} height={20} 
    className='service_providers1'/>
      </div>
    
    <div className="siDesc">
      <h1 className="siTitle">3/4 Ton Pickup Truck</h1>
     
      <span className="siSubtitle">
      GMC SIERRA 2500 CREW CAB OR SIMILAR
      </span>
      
      <span className="siFeatures">
      Towing Capable
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>


    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">₹2162.00</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <div className="amount-vehicle">
                      
                        <Button size='large' onClick={decNum}>-</Button>
                        <span>{num}</span>
                        <Button onClick={incNum}>+</Button>
                        </div>
                  
        <Link to='/service'>
        <button className="siCheckButton" >See availability</button>
        
        </Link>
      </div>
    </div>
    </div>
    <div className="searchItems1">
      <div className="img_2">

    <img
      src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/carouselimageswithouttext/vehicles/pickup-trucks/OQAR_22_ThreeFourths%20Ton%20Pickup_AngularFront_US-ENG.png"
      alt=""
      className="siImg"
      
    /><img src="https://logowik.com/content/uploads/images/719_budget_logo.jpg" alt="" width={70} height={50} 
    className='service_providers1'/>
      </div>
    
    <div className="siDesc">
      <h1 className="siTitle">3/4 Ton Pickup Truck</h1>
     
      <span className="siSubtitle">
      GMC SIERRA 2500 CREW CAB OR SIMILAR
      </span>
      
      <span className="siFeatures">
      Towing Capable
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>


    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">₹3162.00</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <div className="amount-vehicle">
                      
                        <Button size='large' onClick={decNum}>-</Button>
                        <span>{num}</span>
                        <Button onClick={incNum}>+</Button>
                        </div>
                  
        <Link to='/service'>
        <button className="siCheckButton" >See availability</button>
        
        </Link>
      </div>
    </div>
    </div>
   
  </div>
    </div>
    


  </>
  )
}

export default TruckRender