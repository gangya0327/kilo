export interface TreeNode {
  id: string
  name: string
  children?: TreeNode[]
  selected: boolean
}

export interface TreeProps {
  data: TreeNode[]
  onCheck: (node: TreeNode) => void
}
