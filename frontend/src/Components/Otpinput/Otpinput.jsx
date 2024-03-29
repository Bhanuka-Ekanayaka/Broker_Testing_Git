import React from 'react'
import './Otpinput.css'
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Image from './Inputimage/verifiy.jpg';
import Otpinput from 'otp-input-react';
import { useState } from 'react';



export default function Otpinpu() {
  const [otp , setOtp] = useState("")
  return (
    <div className=' d-flex justify-content-center align-items-center min-vh-100'>
      <div className='oc1 '>
        <div className='c1 '>
            <h2 className='oh2'>Almost There</h2>
            <br></br>
            <p className='op3'>Please enter the 6-digit code sent to your <br/>
email contact.uiuxexperts@gmail.com for <br></br>verification.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}className='od4'>
              <>  
                <div>
                  <Otpinput value={otp} onChange={setOtp} OTPLength ={6} otpType = 'number' disabled={false} autoFocus className="otp-container"   ></Otpinput>
                </div>
              </> 
            </div>
           
            <div className="d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
                <button  className="custom-button custom-button-danger  ">Verify</button>
            </div>
            <div  className=" justify-content-center align-items-center">
                <p className='op1'>Didn’t receive any code? Resend Again</p>
                <p className='op2'>Request new code in </p>
            </div>
            
            <div>
              <Link to='../Register' className='ol1'>
                <FaArrowCircleLeft  className='icon-a'  style={{ height: '25px', width: '25px', color:'black' } }/>
              </Link>
            </div>
            
        </div>
        
        <div className='c2 d-none d-md-block '> <img className='im'  src={Image} alt="Description of the image" /></div>
      </div>
    </div>
  )
}
