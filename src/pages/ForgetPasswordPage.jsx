import React,{Suspense,lazy} from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const ForgetPassword = lazy(()=>import('../components/ForgetPassword/ForgetPassword'));

export default function ForgetPasswordPage() {
  return (
    <div>
      <Suspense fallback={<LazyLoader/>}>
        <ForgetPassword/>
      </Suspense>
    </div>
  )
}
