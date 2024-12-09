/**
 * 菜单树形结构类型
 */
export interface DeptTreeOption {
  id: string;
  label: string;
  parentId: string;
  weight: number;
  children?: DeptTreeOption[];
}

export interface RoleDeptTree {
  checkedKeys: string[];
  depts: DeptTreeOption[];
}

export interface RoleVO extends BaseEntity {
  roleId: number | string;
  roleName: string;
  roleKey: string;
  roleSort: number;
  dataScope: string;
  menuCheckStrictly: boolean;
  deptCheckStrictly: boolean;
  status: string;
  delFlag: string;
  remark?: any;
  flag: boolean;
  menuIds?: Array<number | string>;
  deptIds?: Array<number | string>;
  admin: boolean;
}

export interface RoleQuery extends PageQuery {
  roleName: string;
  roleKey: string;
  status: string;
}

export interface RoleForm {
  roleName: string;
  roleKey: string;
  roleSort: number;
  status: string;
  menuCheckStrictly: boolean;
  deptCheckStrictly: boolean;
  remark: string;
  dataScope?: string;
  roleId: string | undefined;
  menuIds: Array<number | string>;
  deptIds: Array<number | string>;
}
