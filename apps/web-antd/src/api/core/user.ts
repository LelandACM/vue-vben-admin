import type { DeptVO } from '#/types/dept.types';
import type { UserForm, UserQuery, UserVO } from '#/types/user.types';

import { requestClient } from '#/api/request';
import { parseStrEmpty } from '#/utils';

/**
 * 获取用户列表
 * @param params 查询参数
 * @returns
 */

export async function getUserListApi(query: UserQuery) {
  return requestClient.get('/system/user/list', { params: query });
}

/**
 * 通过ids查询用户
 * @param ids 用户ids
 * @param deptId 部门id
 * @returns
 */
export async function getUserByIdsApi(ids: number[], deptId: number) {
  return requestClient.get<UserVO[]>(
    `/system/user/optionSelect?userIds=${ids}&deptId=${deptId}`,
  );
}

/**
 * 根据用户id获取用户信息
 * @param id 用户id
 * @returns
 */
export async function getUserByIdApi(userId: number | string) {
  return requestClient.get<UserVO>(`/system/user/${parseStrEmpty(userId)}`);
}

/**
 * 新增用户
 * @param user 用户信息
 * @returns
 */
export async function saveUserApi(user: UserForm) {
  return requestClient.post<UserVO>('/system/user', user);
}

/**
 * 更新用户
 * @param user 用户信息
 * @returns
 */
export async function updateUserApi(user: UserForm) {
  return requestClient.put<UserVO>('/system/user', user);
}

/**
 * 删除用户
 * @param userId 用户id
 * @returns
 */
export async function delUserApi(userId: number) {
  return requestClient.delete(`/system/user/${userId}`);
}

/**
 * 重置密码
 * @param userId 用户id
 * @returns
 */
export async function resetUserPwdApi(userId: number, password: string) {
  return requestClient.put(
    '/system/user/resetPwd',
    { userId, password },
    {
      headers: { isEncrypt: true, repeatSubmit: false },
    },
  );
}

/**
 * 改变用户状态
 * @param userId 用户id
 * @param status 用户状态
 * @returns
 */
export async function changeUserStatusApi(
  userId: number | string,
  status: boolean | number | string,
) {
  return requestClient.put('/system/user/changeStatus', { userId, status });
}

/**
 * 获取用户信息
 * @returns
 */
export async function getUserInfoApi() {
  return requestClient.get<UserVO>('/system/user/profile');
}

/**
 * 更新用户信息
 * @param user 用户信息
 * @returns
 */
export async function updateUserInfoApi(user: UserForm) {
  return requestClient.put<UserVO>('/system/user/profile', user);
}

/**
 * 更新密码
 *
 */
export async function updateUserPwdApi(
  oldPassword: string,
  newPassword: string,
) {
  return requestClient.put(
    '/system/user/profile/updatePwd',
    { oldPassword, newPassword },
    {
      headers: {
        'Content-Type': 'application/json',
        isEncrypt: true,
        repeatSubmit: false,
      },
    },
  );
}

/**
 * 上传用户头像
 */
export async function uploadAvatarApi(data: FormData) {
  return requestClient.post('/system/user/profile/avatar', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

/**
 * 查询授权角色
 * @param userId 用户id
 * @returns
 */
export async function getAuthRoleApi(userId: number | string) {
  return requestClient.get(`/system/user/authRole/${userId}`);
}

/**
 * 保存授权角色
 * @param userId 用户id
 * @param roleIds 角色ids
 * @returns
 */
export async function saveAuthRoleApi(
  userId: number | string,
  roleIds: string,
) {
  return requestClient.put('/system/user/authRole', { userId, roleIds });
}

/**
 * 查询当前部门的所有用户信息
 * @returns
 */
export async function getUserListByDeptIdApi(deptId: number | string) {
  return requestClient.get<UserVO[]>(`/system/user/list/dept/${deptId}`);
}

/**
 * 查询部门下拉树结构
 * @returns
 *
 */
export async function getDeptTreeSelectApi() {
  return requestClient.get<DeptVO[]>('/system/user/deptTree');
}

export default {
  getUserListApi,
  getUserByIdApi,
  saveUserApi,
  updateUserApi,
  delUserApi,
  resetUserPwdApi,
  changeUserStatusApi,
  getUserInfoApi,
  updateUserInfoApi,
  updateUserPwdApi,
  uploadAvatarApi,
  getAuthRoleApi,
  saveAuthRoleApi,
  getUserListByDeptIdApi,
  getDeptTreeSelectApi,
};
