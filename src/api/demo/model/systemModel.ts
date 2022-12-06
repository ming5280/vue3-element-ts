export type MenuParams = {
  menuName?: string;
  status?: string;
};

export type MenuListGetResultModel = {
  id: string;
  orderNo: string;
  createTime: string;
  status: number;
  icon: string;
  component: string;
  permission: string;
};
