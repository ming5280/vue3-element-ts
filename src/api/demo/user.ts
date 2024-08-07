import { http } from '/@/utils/http';
import {
  LoginParams,
  LoginGetResultModel,
  UserListParams,
  UserListGetResultModel,
} from './model/userModel';

enum Api {
  Login = '/mock/api/login',
  GetUserList = '/mock/api/getUserList',
  GetMusicsBySinger = '/api/music/qianqian_music.php',
}

/**
 * @description: 登录
 */
export const login = (data: LoginParams) =>
  http.post<LoginGetResultModel>(
    { url: Api.Login, data },
    { successMessageMode: 'message', isLoading: true },
  );

/**
 * @description: 用户列表
 */
export const getUserList = (params: UserListParams) =>
  http.get<UserListGetResultModel>({ url: Api.GetUserList, params });

/**
 * @description: 歌曲
 */
export const getMusicsBySinger = (params: any) =>
  http.get<any>({ url: Api.GetMusicsBySinger, params }, { isReturnNativeResponse: true });
