import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useRef } from 'react';
import { errorToast, isEmpty } from '../../helper/FormHelper';
import { CreateTask } from './../../services/Service';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  let titleRef,descriptionRef = useRef()
  let navigate = useNavigate()
  const submit=()=>{
    let data = {
      title:titleRef.value,
      description:descriptionRef.value,
      status:"New",
    }
    if(isEmpty(data.title)){
      errorToast("Title field is required.")
    }else if(isEmpty(data.description)){
      errorToast("Description field is required.")
    }else{
      CreateTask(data).then((result)=>{
        navigate('/All')
      })
    }
  }
  return (
    <Container fluid={true} className="content-body">
      <Row className="d-flex justify-content-center">
        <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
          <div className="card">
            <div className="card-body">
              <h4 >Create New</h4>
              <br />
              <input ref={(input)=>titleRef=input}  placeholder="Task Name" className="form-control animated fadeInUp" type="text" />
              <br />
              <textarea ref={(input)=>descriptionRef=input}  rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text" />
              <br />
              <button onClick={submit}  className="btn float-end btn-primary">Create</button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  )
}
