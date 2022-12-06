import { MockMethod } from 'vite-plugin-mock';
// 单纯的使⽤⾃⼰的返回数据话，可以不⽤引⼊mockjs
// http://mockjs.com/examples.html
import Mock, { Random } from 'mockjs';
import { resultError, resultSuccess, requestParams } from '../_util';

export default [
  {
    url: '/api/getUserList',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const { id } = request.query;
      if (!id) {
        return resultError('id不存在！');
      }
      return resultSuccess(
        Mock.mock({
          'list|4': [
            {
              id: '@id',
              name: '@cname',
              age: Random.integer(1, 100),
              address: '@county',
              city: '@city',
              province: '@province',
              email: Random.email(),
              phone: /^1[0-9]{10}$/,
              regin: '@region',
              url: '@url',
              date: Random.date('yyyy-MM-dd'),
            },
          ],
        }),
      );
      // return {
      //   code: 200,
      //   message: 'ok',
      //   data: Mock.mock({
      //     'list|4': [
      //       {
      //         id: '@id',
      //         name: '@cname',
      //         age: Random.integer(1, 100),
      //         address: '@county',
      //         city: '@city',
      //         province: '@province',
      //         email: Random.email(),
      //         phone: /^1[0-9]{10}$/,
      //         regin: '@region',
      //         url: '@url',
      //         date: Random.date('yyyy-MM-dd'),
      //       },
      //     ],
      //   }),
      // };
    },
  },
  // {
  //   url: '/api/login',
  //   timeout: 200,
  //   method: 'post',
  //   response: ({ body }) => {
  //     const { username, password } = body;
  //     const checkUser = createFakeUserList().find(
  //       (item) => item.username === username && password === item.password,
  //     );
  //     if (!checkUser) {
  //       return resultError('Incorrect account or password！');
  //     }
  //     const { userId, username: _username, token, realName, desc, roles } = checkUser;
  //     return resultSuccess({
  //       roles,
  //       userId,
  //       username: _username,
  //       token,
  //       realName,
  //       desc,
  //     });
  //   },
  // },
] as MockMethod[];
