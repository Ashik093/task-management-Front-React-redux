import React,{Suspense,lazy} from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Notfound = lazy(()=>import('../components/NotFound/Notfound'));


export default function NotfoundPage() {
  return (
    <div>
    <Suspense fallback={<LazyLoader/>}>
        <Notfound/>
    </Suspense>

      
    </div>
  )
}
