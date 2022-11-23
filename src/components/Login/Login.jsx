import React from 'react'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { errorToast, isEmail, isEmpty, isFitPasswordLength } from '../../helper/FormHelper';
import { UserLoginRequest } from '../../services/Service';

export default function Login() {
  let emailRef,passwordRef = useRef()
  const submit=()=>{
    let data={
      email:emailRef.value,
      password:passwordRef.value
    }
    console.log(data)
    if(isEmail(data.email)){
      errorToast('Please Enter A Valid Email.')
    }
    else if(isEmpty(data.password)){
      errorToast('Please Enter Password.')
    }
    else if(isFitPasswordLength(data.password)){
      errorToast('Password Length Must Be 5 To 10 Character.')
    }
    else{
      UserLoginRequest(data).then((result)=>{
        if(result){
          window.location.href='/'
        }
      })
    }
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90  p-4">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <br />
                <input placeholder="User Email" className="form-control animated fadeInUp" type="email" ref={(input)=>emailRef=input}/>
                <br />
                <input placeholder="User Password" className="form-control animated fadeInUp" type="password" ref={(input)=>passwordRef=input} />
                <br />
                <button className="btn w-100 animated fadeInUp float-end btn-primary" onClick={submit}>Next</button>
                <hr />
                <div className="float-end mt-3">

                  <span>
                    <Link className="text-center ms-3 h6 animated fadeInUp" to="/Registration" >Sign Up </Link>
                    <span className="ms-1">|</span>
                    <Link className="text-center ms-3 h6 animated fadeInUp" to="/SendOTP">Forget Password</Link>
                  </span>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
