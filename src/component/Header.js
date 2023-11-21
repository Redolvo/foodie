import React from "react";
// import bg from "../images/vid.mp4"

function Header(props){
    return(
        <>      
            <div className='Container'> 
                <div className="f-header">
                    <h1><span className='logo'>&#8497;</span>oodie</h1>
                    <div>TYPICAL INDONESIAN</div>
                </div>
                <div className="text">
                    <div>Explore various types of typical food in Indonesia</div>
                    <div className="start"><a onClick={()=>props.goto(props.linkRef.current)}>Start</a></div>
                </div>
                <div></div>
            </div>
            <video className="myVideo" src='./images/vid.mp4' autoPlay muted playsInline loop>
                Your browser does not support HTML5 video.
            </video> 
        </>
    )
}
export default Header;