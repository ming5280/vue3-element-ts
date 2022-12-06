import { http } from '/@/utils/http';
import { UserListParams, UserListGetResultModel } from './model/systemModel';

enum Api {
  GetUserList = '/api/getUserList',
}

/**
 * @description: 使用示例
 */
export const getUserList = (params: UserListParams) =>
  http.get<UserListGetResultModel>(
    { url: Api.GetUserList, params },
    { successMessageMode: 'message' },
  );
