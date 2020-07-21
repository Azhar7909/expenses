import React from 'react'
import Child from './components/Child'
import {ContextProvider} from './components/globalData';

export default function App() {
  
  return (
    <ContextProvider>
      <Child />
    </ContextProvider>
  )
}
