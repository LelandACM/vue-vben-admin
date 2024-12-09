// 字符串格式化(%s)
export function sprintf(str: string, ...args: string[]) {
  let i = 0;
  return str.replaceAll('%s', () => args[i++] ?? '');
}

/**
 * @param {string} url
 * @returns {object}
 */
export const getQueryObject = (url = window.location.href) => {
  const query = url.split('?')[1] || '';
  const obj: { [key: string]: string } = {};
  query.split('&').forEach((item) => {
    if (!item) return;
    const [key, value] = item.split('=');
    obj[decodeURIComponent(key)] = decodeURIComponent(value);
  });
  return obj;
};

// 转换字符串，undefined,null等转化为""
export const parseStrEmpty = (str: any) => {
  return str === null || str === 'undefined' || str === 'null' ? '' : str;
};
