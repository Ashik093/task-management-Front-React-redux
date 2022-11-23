import React from 'react'
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { errorToast, isEmail, isEmpty, isFitPasswordLength, isPhone, successToast } from '../../helper/FormHelper';
import { UserRegistrationRequest } from '../../services/Service';

export default function Registration() {
  let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef = useRef()
  const navigate = useNavigate();
  const registration=()=>{
    let data = {
        email: emailRef.value,
        firstName: firstNameRef.value,
        lastName: lastNameRef.value,
        mobile: mobileRef.value,
        password: passwordRef.value
    }
    if(isEmail(data.email)){
      errorToast('Please Enter A Valid Email.')
    }
    else if(isEmpty(data.firstName)){
      errorToast('Please Enter First Name.')
    }
    else if(isEmpty(data.lastName)){
      errorToast('Please Enter First Name.')
    }
    else if(isPhone(data.mobile)){
      errorToast('Please Enter Valid Phone Number.')
    }
    else if(isEmpty(data.password)){
      errorToast('Please Enter Password.')
    }
    else if(isFitPasswordLength(data.password)){
      errorToast('Password Length Must Be 5 To 10 Character.')
    }
    else{
      UserRegistrationRequest(data).then((result)=>{
        if(result){
          navigate("/Login");
        }
      })
    }
  }
  
  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-10 col-lg-10 center-screen">
          <div className="card animated fadeIn w-100 p-3">
            <div className="card-body">
              <h4>Sign Up</h4>
              <hr />
              <div className="container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                  <div className="col-md-4 p-2">
                    <label>Email Address</label>
                    <input ref={(input)=>emailRef = input}  placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>First Name</label>
                    <input ref={(input)=>firstNameRef = input}  placeholder="First Name" className="form-control animated fadeInUp" type="text" />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Last Name</label>
                    <input ref={(input)=>lastNameRef = input}  placeholder="Last Name" className="form-control animated fadeInUp" type="text" />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Mobile Number</label>
                    <input ref={(input)=>mobileRef = input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile" />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Password</label>
                    <input ref={(input)=>passwordRef = input} placeholder="User Password" className="form-control animated fadeInUp" type="password" />
                  </div>

                </div>
                <div lassName="row mt-2 p-0">
                  <div className="col-md-4 p-2">
                    <button onClick={registration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
