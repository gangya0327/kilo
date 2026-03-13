import React from 'react'
import { Tree, type TreeNode } from '../packages'

export default function App() {
  const data: TreeNode[] = [
    {
      id: '1',
      name: '111',
      selected: false,
      children: [
        {
          id: '2',
          name: '2222',
          selected: false,
          children: [
            {
              id: '3',
              name: '33333',
              selected: false,
            },
          ],
        },
        {
          id: '4',
          name: '4444',
          selected: true,
        },
      ],
    },
    {
      id: '5',
      name: '555',
      selected: false,
      children: [
        {
          id: '6',
          name: '6666',
          selected: true,
        },
        {
          id: '7',
          name: '7777',
          selected: false,
        },
      ],
    },
  ]
  return (
    <div>
      <h1>Hello React</h1>
      <Tree data={data} onCheck={() => console.log('Tree')}></Tree>
    </div>
  )
}
