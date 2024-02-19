import React from 'react'
import './review.css'
import logo from '../user/bucket.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'

const Review = () => {
  return (
    <>
    <section id='testmonials'>
        
        

        {/* Box Container */}
        <div className='box-container'>

            <div className='test-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                        <img src={logo} className='truckimg1'/>
                        </div>
                        <div className='name'>
                            <strong>Akshay Shinde</strong>
                            <span>@akshayshinde</span>
                        </div>
                    </div>
                    <div className='reviews'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>


                {/* Commenets */}
                <div className='comments'>

                    <p>Customers like the appearance, performance, value, and weight of the shoes. They mention that it looks good, it's good for workout and running, and is a good shoe for the mid range. Customers are also happy with the quality, and comfort. However, some customers differ on fit.</p>
                </div>
            </div>

            <div className='test-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                        <img src={logo} className='truckimg1'/>
                        </div>
                        <div className='name'>
                            <strong>Akshay Shinde</strong>
                            <span>@akshayshinde</span>
                        </div>
                    </div>
                    <div className='reviews'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>


                {/* Commenets */}
                <div className='comments'>

                    <p>Customers like the appearance, performance, value, and weight of the shoes. They mention that it looks good, it's good for workout and running, and is a good shoe for the mid range. Customers are also happy with the quality, and comfort. However, some customers differ on fit.</p>
                </div>
            </div>
            <div className='test-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                        <img src={logo} className='truckimg1'/>
                        </div>
                        <div className='name'>
                            <strong>Akshay Shinde</strong>
                            <span>@akshayshinde</span>
                        </div>
                    </div>
                    <div className='reviews'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>


                {/* Commenets */}
                <div className='comments'>

                    <p>Customers like the appearance, performance, value, and weight of the shoes. They mention that it looks good, it's good for workout and running, and is a good shoe for the mid range. Customers are also happy with the quality, and comfort. However, some customers differ on fit.</p>
                </div>
            </div>
            <div className='test-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                        <img src={logo} className='truckimg1'/>
                        </div>
                        <div className='name'>
                            <strong>Akshay Shinde</strong>
                            <span>@akshayshinde</span>
                        </div>
                    </div>
                    <div className='reviews'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>


                {/* Commenets */}
                <div className='comments'>

                    <p>Customers like the appearance, performance, value, and weight of the shoes. They mention that it looks good, it's good for workout and running, and is a good shoe for the mid range. Customers are also happy with the quality, and comfort. However, some customers differ on fit.</p>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Review