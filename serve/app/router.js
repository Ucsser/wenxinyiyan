/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  // const proxy = app.middleware.proxy; // 代理
  // router.get("/cn.apihz.cn/api/zici/cyjl.php",controller.home.index);
  router.get("/", controller.home.index);
  router.post("/getUser", controller.home.getUser);
};
