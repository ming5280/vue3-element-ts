import { http } from '/@/utils/http';
import { MenuParams, MenuListGetResultModel } from './model/systemModel';

enum Api {
  MenuList = '/system/getMenuList',
}

/**
 * @description: 使用示例
 */
export const getMenuList = (params?: MenuParams) =>
  http.get<MenuListGetResultModel>({ url: Api.MenuList, params }, { errorMessageMode: 'none' });
