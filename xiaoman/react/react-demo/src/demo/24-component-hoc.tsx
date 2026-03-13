import '../App.css'
import React from 'react'

const Role = {
  ADMIN: 'admin',
  USER: 'user',
} as const

type Role = (typeof Role)[keyof typeof Role]

const withAuthorization =
  <P extends object>(role: Role) =>
  (Component: React.ComponentType<P>) => {
    const isAuth = (role: Role) => {
      return role === Role.ADMIN
    }
    return (props: P) => {
      if (isAuth(role)) {
        return <Component {...props} />
      } else {
        return <div>暂无权限</div>
      }
    }
  }

const AdminComponent = withAuthorization(Role.ADMIN)(() => {
  return <div>管理员页面</div>
})

const UserComponent = withAuthorization(Role.USER)(<P extends object>(props: P) => {
  console.log(props)
  return <div>用户页面</div>
})

export default function Demo() {
  return (
    <div>
      <h3>Component</h3>
      <AdminComponent />
      <UserComponent />
    </div>
  )
}
