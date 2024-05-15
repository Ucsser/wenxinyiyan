/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: {
    enable: true,
    package: "egg-cors",
  },
  httpProxy: {
    enable: true,
    package: "egg-http-proxy",
  },
};
