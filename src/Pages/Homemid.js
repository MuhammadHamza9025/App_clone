import React, { useState } from 'react'
import mainpic from '../Pictures/31.jpeg'
import profilepic from '../Pictures/7.jpeg'
import accountpic from '../Pictures/accountpic.jpeg'
import { pink } from '@material-ui/core/colors'
import { array3 } from './Topbarapi'
import { Posts, Posts2 } from './Topbarapi'
import like from '../Pictures/like.png'
import heart from '../Pictures/heart.png'
const Homemid = () => {

    const [likes, setlikes] = useState(0)
    console.log(likes)

    const handlelikes = (id) => {


        setlikes(id)
    }


    return (
        <div className='maincomponent'>
            <div className='Homemid'>
                <div className="mainpic"><img src={mainpic} alt="" />

                </div>
                <div className="profilepic">
                    <img src={profilepic} alt="no image" />

                    <span>Safalk Chaiyco</span>hhhjhj</div>

            </div>




            <div className="homeshare">

                <div className="inputcont"><div className="picture"><img src={profilepic} alt="" /></div>
                    <input type="text" placeholder='What is in your Mind ?' /></div>
                <hr />

                <div className="locatpic">
                    {
                        array3.map((items) => {
                            return (

                                <>
                                    <div className="even"> <p>{items.logo}</p>
                                        <p>{items.title}</p></div>
                                </>
                            )

                        })
                    }
                </div>
            </div>

            <div className='maindiv'>

                <p className='para'>{Posts.map((items) => {

                    return (
                        <>
                            <div className="postshare">
                                <div className="picandname">
                                    <div className="picp"><img src={items.pic2} alt="" /></div>
                                    <span>{items.title}</span>
                                    <p>{items.date}</p>
                                </div>

                                <h3>{items.desc}</h3>

                                <div className="bodypic"><img src={items.photo} alt="" /></div>

                                <div className="likeandcomment">
                                    <div className="like">
                                        <img src={like} alt="" onClick={() => handlelikes(items.id)} className='likeimg' />
                                        <img src={heart} alt="" />
                                        <p>{items.id === likes ? (items.like + 1) : items.like} Likes</p></div>
                                    <div className="comment"><p> Total Comments {items.comment}</p></div>
                                </div>

                            </div>


                            {/* <div className="second">bbb</div> */}

                        </>

                    )
                })}</p>

                <div className="second">

                    <h3>User Friends</h3>
                    <div className='frndmain'>
                        {Posts2.map((items) => {
                            return (


                                <div className="onlineandimg">
                                    <div className="frndimage"><img src={items.pic2} alt="" />
                                        <div className={items.status === true ? 'online' : ''}></div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Homemid
