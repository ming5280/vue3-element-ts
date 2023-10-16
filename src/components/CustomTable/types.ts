import { Ref } from 'vue';
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';

export interface PaginationProps {
  total: number;
  current: number;
  pageSize: number;
}

export interface PaginationRaw {
  current: Ref<number>;
  pageSize: Ref<number>;
  total: Ref<number>;
}

export interface TableColumnProps extends Partial<TableColumnCtx<any>> {
  customRender?: Fn | string;
}
