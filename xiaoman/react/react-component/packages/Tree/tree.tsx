import React, { useState } from 'react'
import { TreeNode, TreeProps } from './type'
import './style.css'

const Tree: React.FC<TreeProps> = ({ data, onCheck }) => {
  const [treeData, setTreeData] = useState<TreeNode[]>(data)
  const changeTreeData = (node: TreeNode, selected: boolean) => {
    setTreeData(
      treeData.map((item) => {
        if (item.id === node.id) {
          item.selected = selected
        }
        return item
      })
    )
    onCheck && onCheck(node)
  }

  return (
    <div>
      {treeData.map((item) => (
        <div key={item.id}>
          <input
            id={item.id}
            type="checkbox"
            checked={item.selected}
            onChange={(e) => changeTreeData(item, e.target.checked)}
          />
          <label htmlFor={item.id}> {item.name} </label>
          <div className="tree-node">
            {item.children && <Tree data={item.children} onCheck={onCheck}></Tree>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Tree
