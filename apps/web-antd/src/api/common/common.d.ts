/**
 * 分页查询参数
 */
declare interface PageQuery {
  pageNum: number;
  pageSize: number;
}

/**
 * 基础实体
 */
declare interface BaseEntity {
  createBy?: any;
  createDept?: any;
  createTime?: string;
  updateBy?: any;
  updateTime?: any;
}
