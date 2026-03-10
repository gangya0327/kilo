import '../App.css'
import { useImmer } from 'use-immer'
// import { useState } from 'react'

function Demo() {
  const [person, setPerson] = useImmer({
    name: 'peter',
    age: 29,
    address: {
      province: '浙江省',
      city: '杭州市',
    },
  })

  return (
    <>
      <div>姓名：{person.name}</div>
      <div>年龄：{person.age}</div>
      <div>
        住址：{person.address.province} - {person.address.city}
      </div>
      <button
        onClick={() => {
          // setPerson({
          //   ...person,
          //   name: 'raven',
          //   address: {
          //     ...person.address,
          //     city: '上海市',
          //   },
          // })
          setPerson((draft) => {
            draft.name = 'raven'
            draft.address.city = '上海市'
          })
        }}
      >
        修改住址
      </button>
    </>
  )
}

export default Demo
