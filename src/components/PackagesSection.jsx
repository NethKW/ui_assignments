import React from 'react';
import "../components/PackagesSection.css";
import check from "../assets/check.png"

function PackagesSection() {
    return (
        <div className='package-section'>
            <div className='p-left'>
                <h1>Level up your <br /> career with <br /> limitless learning</h1>
                <button> start 14 days free trial</button>
            </div>
            <div className='p-right'>
                <div className='package-basic'>
                    <h4>Basic</h4>
                    <h2>Free</h2>
                    <div className='p-check-list'>
                        <ul>
                            <li><img src={check} alt="check" />Free Masterclasses</li>
                            <li><img src={check} alt="check" />Job Recommendations</li>
                            <li><img src={check} alt="check" />Competitions</li>
                        </ul>
                    </div>
                </div>
                <div className='package-pro'>
                    <h4>Pro</h4>
                    <h2>29$/month</h2>
                    <h5>Membership includes everything from Basic and more</h5>
                    <div className='p-check-list'>
                        <ul>
                            <li><img src={check} alt="check" />Free Masterclasses</li>
                            <li><img src={check} alt="check" />Job Recommendations</li>
                            <li><img src={check} alt="check" />Competitions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackagesSection
