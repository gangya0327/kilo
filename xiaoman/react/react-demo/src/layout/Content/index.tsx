import { Outlet } from 'react-router'
import { useNavigation } from 'react-router'
import { Alert, Spin } from 'antd'

export default function Content() {
  const navigation = useNavigation()
  console.log('navigation ->', navigation)
  const isLoading = navigation.state === 'loading'
  return isLoading ? (
    <Spin>
      <Alert title="Loading..." type="info" />
    </Spin>
  ) : (
    <Outlet />
  )
}
