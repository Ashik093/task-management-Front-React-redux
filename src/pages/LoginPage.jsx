import React,{Suspense,lazy} from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Login = lazy(()=>import('../components/Login/Login'));
export default function LoginPage() {
  return (
    <div>
      <Suspense fallback={<LazyLoader/>}>
          <Login/>
      </Suspense>
    </div>
  )
}
