import '../App.css'
import { lazy, Suspense } from 'react'
// import AsyncComponent from '../components/Async'
const AsyncComponent = lazy(() => import('../components/Async'))

export default function Demo() {
  return (
    <div>
      <h3>Component</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncComponent />
      </Suspense>
    </div>
  )
}
