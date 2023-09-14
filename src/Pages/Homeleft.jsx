import React from 'react'
import Homee from './Homee.css'

import array1 from './Topbarapi';
import { array2 } from './Topbarapi';
const Homeleft = () => {
    return (
        <div className='Homeleft'>
            {array1.map((items) => {
                return (

                    <>
                        <div className="apilogos"><p>{items.logo}</p>
                            <span>{items.title}</span></div>
                    </>
                )
            })}
            <hr />


            {array2.map((items) => {
                return (

                    <>
                        <div className="apipics2">
                            <div className="piccs"><img src={items.pic} alt="" /></div>
                            <span>{items.title}</span>
                        </div>
                    </>
                )
            })}




        </div>
    )
}
export default Homeleft;



