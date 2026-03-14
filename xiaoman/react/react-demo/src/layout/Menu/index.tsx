import { Menu as AntdMenu } from 'antd'
import { AppstoreOutlined, SmileOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router'

export default function Menu() {
  const navigate = useNavigate() //编程式导航
  const handleClick: MenuProps['onClick'] = (info) => {
    navigate(info.key) // 点击菜单项时，导航到对应的页面
  }
  const menuItems = [
    {
      key: '/home',
      label: 'Home',
      icon: <AppstoreOutlined />,
    },
    {
      key: '/about/123',
      label: 'About',
      icon: <SmileOutlined />,
    },
  ]
  return <AntdMenu onClick={handleClick} style={{ height: '100vh' }} items={menuItems} />
}
