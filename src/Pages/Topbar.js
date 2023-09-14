import React, { useState } from 'react'
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import accountpic from '../Pictures/accountpic.jpeg'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Topbar = () => {

    return (
        <>
            <div className="maincontainer">
                <div className="leftbar"><span>LamaSocial</span></div>
                <div className="midbar">
                    <div className="input"><SearchOutlinedIcon className='localicons'></SearchOutlinedIcon><input type="text" placeholder='Serach for friend , Post or vedio' />                      </div>
                    <ul>
                        <li>Homepage</li>
                        <li>Timeline</li>
                    </ul>
                </div>
                <div className="rightbar">
                    <div className="icons">

                        <div ><SupervisorAccountOutlinedIcon /><sup>2</sup></div>
                        <div >< MessageOutlinedIcon /><sup>2</sup></div>
                        <div ><NotificationsNoneOutlinedIcon /><sup>2</sup></div>
                    </div>
                    <div className="topbarImg">
                        <img src={accountpic} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
