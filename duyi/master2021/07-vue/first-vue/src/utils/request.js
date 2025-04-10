import axios from 'axios';
import showMessage from '@/utils/showMessage';

const instance = axios.create({});
instance.interceptors.response.use(function (response) {
  console.log('response :>> ', response);
  if (response.data.code === 0) {
    return response.data.data;
  }
  showMessage({
    content: response.data.msg || '系统错误',
    type: 'danger',
    duration: 2000,
  });
});

export default instance;
