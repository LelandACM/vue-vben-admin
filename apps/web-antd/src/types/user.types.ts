import type { PostVO } from './post.types';
import type { RoleVO } from './role.types';
/**
 * 用户查询对象类型
 */
export interface UserQuery extends PageQuery {
  username?: string;
  phonenumber?: string;
  status?: string;
  deptId?: number | string;
  roleId?: number | string;
}

/**
 * 用户返回对象
 */
export interface UserVO extends BaseEntity {
  userId: number | string;
  tenantId: string;
  deptId: number;
  username: string;
  nickName: string;
  userType: string;
  email: string;
  phonenumber: string;
  sex: string;
  avatar: string;
  status: string;
  delFlag: string;
  loginIp: string;
  loginDate: string;
  remark: string;
  deptName: string;
  roles: RoleVO[];
  roleIds: any;
  postIds: any;
  roleId: any;
  admin: boolean;
}

/**
 * 用户信息
 */
export interface UserInfo {
  user: UserVO;
  roles: string[];
  permissions: string[];
}

/**
 * 用户表单类型
 */
export interface UserForm {
  id?: string;
  userId?: string;
  deptId?: number;
  username: string;
  nickName?: string;
  password: string;
  phonenumber?: string;
  email?: string;
  sex?: string;
  status: string;
  remark?: string;
  postIds: string[];
  roleIds: string[];
}

export interface UserInfoVO {
  user: UserVO;
  roles: RoleVO[];
  roleIds: string[];
  posts: PostVO[];
  postIds: string[];
  roleGroup: string;
  postGroup: string;
}

export interface ResetPwdForm {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}