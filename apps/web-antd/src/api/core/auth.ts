import { baseRequestClient, requestClient } from '#/api/request';

export namespace AuthApi {
  /** 登录接口参数 */
  export interface LoginParams {
    tenantId?: string;
    password?: string;
    username?: string;
    rememberMe?: boolean;
    socialCode?: string;
    socialState?: string;
    source?: string;
    code?: string;
    uuid?: string;
    clientId: string;
    grantType: string;
  }

  /**
   * 注册
   */
  export type RegisterForm = {
    code?: string;
    confirmPassword?: string;
    password: string;
    tenantId: string;
    username: string;
    userType?: string;
    uuid?: string;
  };

  /** 登录接口返回值 */
  export interface LoginResult {
    accessToken: string;
  }

  export interface RefreshTokenResult {
    data: string;
    status: number;
  }
}

/**
 * 登录
 */
export async function loginApi(data: AuthApi.LoginParams) {
  return requestClient.post<AuthApi.LoginResult>('/auth/login', data);
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
  return baseRequestClient.post<AuthApi.RefreshTokenResult>('/auth/refresh', {
    withCredentials: true,
  });
}

/**
 * 退出登录
 */
export async function logoutApi() {
  return baseRequestClient.post('/auth/logout', {
    withCredentials: true,
  });
}

/**
 * 获取用户权限码
 */
export async function getAccessCodesApi() {
  return requestClient.get<string[]>('/auth/codes');
}
