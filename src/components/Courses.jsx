import React from 'react'
import "../components/Courses.css";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
// import course3 from "../assets/course3.png";
function Courses() {
    return (
        <div className='course'>
            <div className='course-left'>
                <h1>Live, mentor-led <br />group sessions</h1>
                <p>Mentor-led, live and interactive masterclasses to accelerate learning and
                    enable you to level up your career
                </p>
                <button className='button'>Explore Masterclasses</button>
            </div>
            <div className='course-right'>
                <div className="course-card purple">
                    <img src={course1} alt="mentor" />
                    <h4>Rashid Shaikh</h4>
                    <p>Decoding Product Strategy</p>
                </div>

                <div className="course-card pink">
                    <img src={course2} alt="mentor" />
                    <h4>Mercedes Barrachina</h4>
                    <p>Healthcare Analytics</p>
                </div>

                {/* <div className="course-card blue">
                    <img src={course3} alt="mentor" />
                    <h4>David Garcia</h4>
                    <p>How Career Planning Landed Me a Job at Amazon</p>
                </div> */}
            </div>
        </div>
    )
}

export default Courses
