import '../App.css'
import React, { useState, useTransition } from 'react'
import { Input, List } from 'antd'

interface Item {
  id: number
  name: string
  address: string
}

function Demo() {
  const [value, setValue] = useState('')
  const [list, setList] = useState<Item[]>([])
  const [isPending, startTransition] = useTransition()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)

    fetch('/api/list?keyword=' + value)
      .then((res) => res.json())
      .then((res) => {
        startTransition(() => setList(res.list))
      })
  }

  return (
    <>
      <Input value={value} onChange={handleChange}></Input>
      {isPending && <div>Loading...</div>}
      <List
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.address}></List.Item.Meta>
          </List.Item>
        )}
        dataSource={list}
      ></List>
    </>
  )
}

export default Demo
