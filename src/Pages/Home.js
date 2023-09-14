import React from 'react'
import Topbar from './Topbar'
import Homeleft from './Homeleft'
import Homemid from './Homemid'
import Homee from './Homee.css'
const Home = () => {
    return (
        <>
            <Topbar></Topbar>

            <div className="Home">  <div className="leftside">  <Homeleft />        </div>
                <div className="rightside"><Homemid></Homemid></div>
            </div>
        </>
    )
}

export default Home
