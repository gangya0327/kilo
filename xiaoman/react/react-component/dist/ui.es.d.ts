import { default as default_2 } from 'react';

export declare const Tree: default_2.FC<TreeProps>;

export declare interface TreeNode {
    id: string;
    name: string;
    children?: TreeNode[];
    selected: boolean;
}

export declare interface TreeProps {
    data: TreeNode[];
    onCheck: (node: TreeNode) => void;
}

export { }
