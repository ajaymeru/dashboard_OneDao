import React from 'react'
import "./OtpVerify.scss"
import { useState } from 'react';
import Mojave from "../assets/register.png"
import { Link } from 'react-router-dom';

const OtpVerify = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    return (
        <div className='OtpVerify'>
            <div className="OtpVerify-container">
                <div className="img-container">
                    <img src={Mojave} alt="" />
                </div>
                <div className="form-container">
                    <h2>Verify your email</h2>
                    <p>Enter the OTP from your register email id</p>
                    <form action="">
                        <div className="otpboxes">
                            {otp.map((data, index) => {
                                return (
                                    <input
                                        type="text"
                                        name="otp"
                                        maxLength="1"
                                        key={index}
                                        value={data}
                                        onChange={e => handleChange(e.target, index)}
                                        onFocus={e => e.target.select()}
                                        className="otp-input"
                                    />
                                );
                            })}
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Register
                        </button>
                    </form>
                    <p className="resend-otp">
                        Didn't receive the OTP? <Link to="#">Resend OTP</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OtpVerify