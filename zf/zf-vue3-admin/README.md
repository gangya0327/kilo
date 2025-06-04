## 特性
- node 18+（本项目 20.18.1）
- pnpm 包管理工具
- vite 构建工具
- vue 3.5+
- eslint 9.28.0
- prettier

## 工程搭建

### 创建项目

`pnpm create vite`
依次选择：vue, typescript

### 配置 eslint

`npx eslint --init`
![alt text](./readme/eslint.png)

### 配置 prettier

`pnpm install prettier eslint-plugin-prettier eslint-config-prettier -D`

创建 `prettier.config.js` 文件

```js
export default {
  singleQuote: false, // 单引号
  semi: false, // 语句后面是否需要分号
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false,
  endOfLine: "auto",
};
```

*⚠️ 注意：`eslint-plugin-prettier/recommended`的配置会移除规则，可能会影响自定义 rules*

### 配置 editorconfig

```
root = true
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
```
