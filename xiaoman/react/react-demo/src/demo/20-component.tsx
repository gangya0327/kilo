import '../App.css'
// import React from 'react'
import Card from '../components/Card'

export default function Demo() {
  return (
    <div>
      <h3>20-component</h3>
      <Card />
      <button onClick={() => window.onShow()}> 调用 message</button>
    </div>
  )
}
