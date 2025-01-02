<script lang="ts" setup>
import type { RowType } from './index.data';

import type { VxeGridListeners } from '#/adapter/vxe-table';

import { Page } from '@vben/common-ui';

import { Button, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import { gridOptions } from './index.data';
import userDept from './user-dept.vue';

const gridEvents: VxeGridListeners<RowType> = {
  cellClick: ({ row }) => {
    message.info(`cell-click: ${row.name}`);
  },
};

const [Grid, gridApi] = useVbenVxeGrid({ gridEvents, gridOptions });

const showBorder = gridApi.useStore((state) => state.gridOptions?.border);
const showStripe = gridApi.useStore((state) => state.gridOptions?.stripe);

function changeBorder() {
  gridApi.setGridOptions({
    border: !showBorder.value,
  });
}

function changeStripe() {
  gridApi.setGridOptions({
    stripe: !showStripe.value,
  });
}

function changeLoading() {
  gridApi.setLoading(true);
  setTimeout(() => {
    gridApi.setLoading(false);
  }, 2000);
}
</script>
<template>
  <Page
    description="表格组件常用于快速开发数据展示与交互界面，示例数据为静态数据。该组件是对vxe-table进行简单的二次封装，大部分属性与方法与vxe-table保持一致。"
    title="表格基础示例"
  >
    <userDept />
    <Grid stripe table-title="基础列表" table-title-help="提示">
      <!-- <template #toolbar-actions>
        <Button class="mr-2" type="primary">左侧插槽</Button>
      </template> -->
      <template #toolbar-tools>
        <Button class="mr-2" type="primary" @click="changeBorder">
          {{ showBorder ? '隐藏' : '显示' }}边框
        </Button>
        <Button class="mr-2" type="primary" @click="changeLoading">
          显示loading
        </Button>
        <Button type="primary" @click="changeStripe">
          {{ showStripe ? '隐藏' : '显示' }}斑马纹
        </Button>
      </template>
    </Grid>
  </Page>
</template>
