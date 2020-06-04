import request from '@/utils/request';

type LoginParams = {
  username: string;
  password: string;
};

export async function login(params: LoginParams) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}
