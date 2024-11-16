enum Api {
  api = '/system/user/',
  authRole = '/system/user/authRole',
  changeStatus = '/system/user/changeStatus',
  list = '/system/user/list',
  resetPwd = '/system/user/resetPwd',
}

export const getOne = () => {
  return {
    url: Api.api,
    method: 'GET',
  };
};
