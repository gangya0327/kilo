import request from '@/utils/request';

export async function getBanners() {
  const res = await request.get('/api/banners');
  console.log('res :>> ', res);
}
