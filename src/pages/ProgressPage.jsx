import React,{Fragment,Suspense,lazy} from 'react'
import MasterLayout from './../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Process = lazy(()=>import('../components/Process/Process'));

export default function ProgressPage() {
  return (
    <Fragment>
        <MasterLayout>
          <Suspense fallback={<LazyLoader/>}>
              <Process/>
          </Suspense>
        </MasterLayout>
      </Fragment>
  )
}
