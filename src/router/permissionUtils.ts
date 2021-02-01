import { RouteConfig } from 'vue-router';

/**
 * <分治法> 构造符合权限的路由，将不符合权限的路由过滤
 * @param router 未过滤的路由 因为最外层有一层用来做布局的 {index} 路由，所以传的是 index[0].children
 * @param t 暂存变量
 * @returns {*} 过滤后的路由
 */
function constructionRouters(router: RouteConfig[], t: RouteConfig[] = []) {
  for (let i = 0; i < router.length; i++) {
    if (t[i].children) {
      t[i].children = constructionRouters(t[i].children || []);
    }
  }
  return t;
}

export default constructionRouters;
