import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import Demo from './demo/7-useReducer.tsx'
// import Demo from './demo/8-useImmer.tsx'
// import Demo from './demo/9-useSyncExternalStore1.tsx'
// import Demo from './demo/9-useSyncExternalStore2.tsx'
// import Demo from './demo/10-useTransition.tsx'
// import Demo from './demo/11-useDeferredValue.tsx'
// import Demo from './demo/12-useLayoutEffect1.tsx'
// import Demo from './demo/12-useLayoutEffect2.tsx'
// import Demo from './demo/13-useRef1.tsx'
// import Demo from './demo/13-useRef2.tsx'
// import Demo from './demo/14-useImperativeHandle.tsx'
// import Demo from './demo/15-useContext.tsx'
// import Demo from './demo/16-useMemo.tsx'
// import Demo from './demo/16-React.memo.tsx'
// import Demo from './demo/17-useCallback'
// import Demo from './demo/18-useDebugValue'
import Demo from './demo/19-useId'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Demo />
  </StrictMode>
)
