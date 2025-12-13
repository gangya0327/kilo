import axios from 'axios'
import { showMessage } from '@/utils';

const instance = axios.create()

instance.interceptors.response.use(res => {
  if (res.data.code === 0) {
    return res.data;
  }
  showMessage({
    content: res.data.msg || '获取数据失败',
    type: 'danger',
    // duration: 3000
  })
  return null
})

export default instance