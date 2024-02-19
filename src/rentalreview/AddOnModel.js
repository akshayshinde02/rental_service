import { React, useState,useEffect } from 'react'
import './addonmodel.css'
import Review from '../reviews/Review'
import EndPage from '../endpage/EndPage'
import MainAddOn from './MainAddOn'
import MuiStepper from '../steper/MuiStepper'
import logo1 from '../user/truck.jpg'
import logo2 from '../user/truck.jpg'
import logo3 from '../user/truck.jpg'
import logo4 from '../user/truck1jpg.jpg'
// import logo1 from '../user/bucket.png'
import styled from '@emotion/styled'

const AddOnModel = () => {

    // Image Array
    const images = [logo1, logo4, logo3, logo4];
    const [mainImage, setMainImage] = useState(images[0])

    const [name, setName] = useState("");

    const [isVissible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const toggleVisibility = () => {
        setIsVisible((preVisible) => !preVisible);
    }

    const [astepper,setasteper] = useState(1);

    // useEffect(() => {
    //     // document.body.style.overflowY = "hidden";
    //     return () => {
    //       // document.body.style.overflowY = "scroll";
    //       setasteper(astepper+2);
    //     };
    //   }, []);

    return (
        <>
            <div className='progresscenter'>
                {/* <ProgressBar /> */}
                <MuiStepper isPositionFixed={true} astepper={astepper}/>
            </div>
            <div className='maincontainer1'>

                <div className='container7 responsivecon'>
                    <div className='center'>
                        <span className='titley1 servicetitle'>Service Truck Name</span><br />


                        <div className='truckimage1'>
                            <div className='img1'>
                                {
                                    images.map((image, i) => (
                                        <img
                                            src={image}
                                            className='truckimgs'
                                            key={i}
                                            alt={`Truck ${i + 1}`}
                                            onClick={() => setMainImage(image)}
                                        />
                                    ))
                                }
                            </div>
                            <div className='img2'>
                                <img src={mainImage} className='truckimg2' />
                            </div>
                            {/* <img src={logo1} className='truckimg' /> */}
                        </div>
                    </div>

                    {/* <div className='charges'>
                        <div className='pricestitle'>
                            <span className='bold'>Cargo Truck</span>
                            <span className='cost'>$354</span>
                        </div>

                        <div className='pricestitle'>
                            <span className='bold'> Protection</span> <br />
                            <span className='cost'>$354</span>
                        </div>
                        <span className='top'>Supplemental Liability (Sli) $97.35 <br />
                            Physical Damage Waiver $114.95  <br />
                            Personal Accident & Cargo $52.25   <br />
                            Roadside Safety Net $69.95</span> <br /><br />

                        <div className='pricestitle'>
                            <span className='bold'> Add Ons  </span><br />
                            <span className='cost'>$354</span>
                        </div>
                        <span className='top'>No Hand Truck(s)  = $0.00 <br />
                            No Furniture Pads  = $0.00</span><br /><br />

                        <div className='pricestitle'>
                            <span className='bold'> Taxes </span><br />
                            <span className='cost'>$354</span>
                        </div>
                        <span className='top'>
                            Sales Tax $244.49   <br />
                            Cost Recovery Fee 5 Day(S) @ 3.50 = $17.50  <br />
                            Energy Recovery Fee 5 Day(S) @ .13 = $0.65  <br />
                            Fleet Management Fee 5 Day(S) @ 1.00 = $5.00 <br />
                        </span> <br />
                        <span className='top'>
                            Sales Tax $244.49   <br />
                            Cost Recovery Fee 5 Day(S) @ 3.50 = $17.50  <br />
                            Energy Recovery Fee 5 Day(S) @ .13 = $0.65  <br />
                            Fleet Management Fee 5 Day(S) @ 1.00 = $5.00 <br />
                        </span> <br />

                        <div className='pricestitle'>
                            <span className='estcost'>Estimated Cost</span><br />
                            <span className='cost estcost'>$2433.23</span><br />
                        </div>
                    </div> */}

                <div className='rentalservicename center'>Rental Service Name</div><br />
                    <div className='descriptions'>

                        <h2 className='center'>Descriptions</h2><br/>
                        <h4 className='ullist'>3/4 Ton Pickup Truck Features</h4>
                        <ul className='ullist'>

                            <li>Up to 4,000 lbs payload*</li>
                            <li>3-6 person seating - Extended or Crew Cabs</li>
                            <li>2-wheel and 4-wheel drive available</li>
                            <li> 6'-8' truck beds available</li>
                            <li> Towing capable - trucks have receiver hitch for easy towing</li>
                            <li> Great for recreation, local moves and projects</li><br></br>
                            <h4> Standard Features</h4>

                            <li> Air Conditioning</li>
                            <li> Automatic Transmission</li>
                            <li>  AM/FM Radio</li>
                        </ul>
                    </div>

                </div>

                <div className='maindiv2'>

                    <div className='cont1'>

                        <div className='flexybox'>
                            <div className='pickupbox'>
                                <span className='titley1  bold'>Pick Up</span><br />
                                <span className='pickupaddress space'>4646 California</span> <br />
                                <span className='pickupdate'>Sun, 9:20AM Sept 24</span> <br />
                                <button className='colors'>
                                Edit
                            </button>

                            </div>
                            {/* <div
                                className="line2"
                                style={{ width: `${17}%` }}
                            ></div> */}
                            <div className='dropupbox'>
                                <span className='titley1 bold'>Drop Up</span><br />
                                <span className='dropupaddress space'>2001 Los Angels</span> <br />
                                <span className='pickupdate'>Tues, 9:20AM Sept 30</span> <br />
                                <button className='colors'>
                                Edit
                            </button>
                            </div>
                        </div><br />
                    </div>
                    <div className='centerreview'>
                    <Review />
                    </div>

                    <button className="buttonss btn11" onClick={() => setShowModal(true)}>
                        Click To Continue
                    </button>
                    {showModal && <MainAddOn closeModal={closeModal} />}
                </div>
            </div>
        </>
    )
}

export default AddOnModel