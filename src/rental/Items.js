import React from 'react'
import './TruckService.css'
import logo from './rental.jpg'
import { DatePicker } from 'antd';
import {useNavigate} from 'react-router-dom'
const { TimePicker} = DatePicker;

const Items = () => {

  
  const navigate = useNavigate();

  const goToRegistration =()=>{

    navigate('/addon');
}

  return (
    <div className='serachItem'  >
        
          <div className='openClosed'> open</div>
        <img src={logo} className='image'/>

        <div className='desc' >

            <h1 className='titley1'>Service Rental 1</h1>
            <span className='distance'>500 mtr</span>
            <span className='subtitle'>Good to Buy</span>
            <div className='rating'>
                <span>Exellent</span>
                <button>9.0</button>
            </div>
        </div>
        {/* <div className='space'></div> */}

        <div className='time' >
                Su   8 am-2 pm <br/>
                M-F  6 am-5:30 pm  <br/>
                Sa   7 am-4 pm <br/>
        </div>
        <div className='details'>
            {/* <span className='price'>$678</span>
            <span className='tax'>Include all Taxes and Fees</span> */}
        {/* <TimePicker className='timepicker'/> */}
        <button className='searchItem' onClick={() => goToRegistration()}>Select Service</button>
            
        </div>
    </div>
  )
}

export default Items