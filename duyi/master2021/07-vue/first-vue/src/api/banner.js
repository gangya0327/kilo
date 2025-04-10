import request from '@/utils/request';

export async function getBanners() {
  const res = await request.get('/api/banners');
  return res.data;
}
