<script setup lang="ts">
import { ref } from 'vue';

import { Empty, InputSearch, Tree } from 'ant-design-vue';

import { $t } from '#/locales';

const searchValue = ref('');
const treeData = ref([
  {
    title: 'XXX公司',
    key: '0',
    children: [
      {
        title: 'XXX公司-1',
        key: '0-0',
        children: [{ title: 'XXX公司-1-1', key: '0-0-0' }],
      },
    ],
  },
  {
    title: 'YYY公司',
    key: '1',
    children: [{ title: 'YYY公司-1', key: '1-0' }],
  },
  {
    title: 'ZZZ公司',
    key: '2',
    children: [{ title: 'ZZZ公司-1', key: '2-0' }],
  },
]);

const handleSearch = (_value: string) => {};

const onSelect = (_selectedKeys: string[], _info: any) => {};
</script>

<template>
  <InputSearch
    v-model:value="searchValue"
    :placeholder="$t('common.search')"
    allow-clear
    @search="handleSearch"
  />
  <Tree
    v-if="treeData.length > 0"
    :tree-data="treeData"
    check-strictly
    click-row-to-expand
    @select="onSelect"
  />
  <Empty v-else description="暂无数据" />
</template>
