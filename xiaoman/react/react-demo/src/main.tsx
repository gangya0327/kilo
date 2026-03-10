import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import Demo from './demo/7-useReducer.tsx'
// import Demo from './demo/8-useImmer.tsx'
// import Demo from './demo/9-useSyncExternalStore1.tsx'
import Demo from './demo/9-useSyncExternalStore2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Demo />
  </StrictMode>
)
