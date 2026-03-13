import '../App.css'
// import React from 'react'
import Card from '../components/Card'

export default function Demo() {
  const fn = (name: string) => {
    console.log('点击了: ' + name)
  }
  return (
    <div>
      <h3>Component</h3>
      <Card title={'学习组件'} content={'组件通信111'} callback={(some) => fn(some)} />
      <Card content={'组件通信222'} />
    </div>
  )
}
