import React from 'react'
import { Fragment, useEffect } from 'react';
import { GetDashboardSummury } from '../../services/Service';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  useEffect(()=>{
    GetDashboardSummury()
  },[])
  const summury = useSelector((state)=>state.summury.summury)
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {
            summury.map((item,i)=>
              <div key={i.toString()} className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="animated fadeInUp">Total {item._id}</h5>
                    <h6 className="text-secondary animated fadeInUp">{item.sum} </h6>
                  </div>
                </div>
              </div>
            )
          }
          

        </div>
      </div>
    </Fragment>
  )
}
