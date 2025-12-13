import request from '@/utils/request';

export async function test() {
  return await request.get('/api/banner');
}