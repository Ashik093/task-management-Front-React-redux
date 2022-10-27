import React,{Suspense,lazy} from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Registration = lazy(()=>import('../components/Registration/Registration'));

export default function RegistrationPage() {
  return (
    <div>
      <Suspense fallback={<LazyLoader/>}>
          <Registration/>
      </Suspense>
    </div>
  )
}
