import { MockMethod } from 'vite-plugin-mock';
// 单纯的使⽤⾃⼰的返回数据话，可以不⽤引⼊mockjs
// http://mockjs.com/examples.html
import Mock, { Random } from 'mockjs';
import { resultError, resultSuccess } from '../_util';

const userData = Mock.mock({
  'list|100': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|10-30': 1,
      'gender|1': ['男', '女'],
      email: '@EMAIL',
      address: '@county(true)',
      'job|1': ['前端工程师', '后端工程师'],
      date: Random.date('yyyy-MM-dd'),
    },
  ],
});

// Mock.mock({
//   'list|4': [
//     {
//       id: '@id',
//       name: '@cname',
//       age: Random.integer(1, 100),
//       address: '@county',
//       city: '@city',
//       province: '@province',
//       email: Random.email(),
//       phone: /^1[0-9]{10}$/,
//       regin: '@region',
//       url: '@url',
//       date: Random.date('yyyy-MM-dd'),
//     },
//   ],
// }),

export default [
  {
    url: '/mock/api/login',
    timeout: 500,
    method: 'post',
    response: (request) => {
      const { username, password } = request.body;
      if (username !== 'admin' || password !== '123456') {
        return resultError('请输入用户名和密码！');
      }
      return resultSuccess(
        {
          id: '10000001',
          name: 'admin',
          age: '25',
        },
        {
          message: '登录成功！',
        },
      );
    },
  },
  {
    url: '/mock/api/getUserList',
    timeout: 1000,
    method: 'get',
    response: (request) => {
      const { id = null, current = null, pageSize = null } = request.query;
      if (!id || !current || !pageSize) {
        return resultError('缺少字段！');
      }
      const start = (current - 1) * pageSize;
      const end = current * pageSize;
      const list = userData.list.slice(start, end);
      return resultSuccess({
        temp: {
          list,
          total: userData.list.length,
        },
      });
    },
  },
] as MockMethod[];
