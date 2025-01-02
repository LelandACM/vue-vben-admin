import type { VxeGridProps } from '#/adapter/vxe-table';

import { MOCK_TABLE_DATA } from '#/views/examples/vxe-table/table-data';

export interface RowType {
  address: string;
  age: number;
  id: number;
  name: string;
  nickname: string;
  role: string;
}

export const gridOptions: VxeGridProps<RowType> = {
  columns: [
    { title: '序号', type: 'seq', width: 60 },
    { field: 'name', title: 'Name' },
    { field: 'age', sortable: true, title: 'Age' },
    { field: 'nickname', title: 'Nickname' },
    { field: 'role', title: 'Role' },
    { field: 'address', showOverflow: true, title: 'Address' },
  ],
  stripe: true,
  border: true,
  data: MOCK_TABLE_DATA,
  pagerConfig: {
    enabled: true,
  },
  toolbarConfig: {
    custom: true,
    export: true,
    refresh: true,
    zoom: true,
  },
  sortConfig: {
    multiple: true,
  },
};
