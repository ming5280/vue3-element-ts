import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';

export interface PaginationProps {
  total: number;
  current: number;
  pageSize: number;
  //   pageSizes: number[];
  //   layout: string;
  //   background: boolean;
}

export interface TableColumnProps extends TableColumnCtx<any> {
  customRender?: Fn | string;
}
