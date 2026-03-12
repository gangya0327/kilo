import '../App.css'
import { useState, useDeferredValue } from 'react'
import { Input, List } from 'antd'
import mockjs from 'mockjs'

interface Item {
  id: number
  name: string
  address: string
}

function Demo() {
  const [value, setValue] = useState('')
  const [list] = useState<Item[]>(
    () =>
      mockjs.mock({
        'list|300': [
          {
            id: '@id',
            name: '@natural',
            address: '@county(true)',
          },
        ],
      }).list
  )
  const deferredQuery = useDeferredValue(value)
  const isStale = deferredQuery !== value
  console.log('isStale ->', isStale)
  const findList = () => {
    console.log(deferredQuery, '--', value)
    return list.filter((item) => item.name.toString().includes(deferredQuery))
  }

  return (
    <>
      <Input value={value} onChange={(e) => setValue(e.target.value)}></Input>
      <List
        style={{ opacity: isStale ? 0 : 1, transition: 'opacity 1s ease-in-out' }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.address}></List.Item.Meta>
          </List.Item>
        )}
        dataSource={findList()}
      ></List>
    </>
  )
}

export default Demo
