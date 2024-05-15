const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getUser() {
    const { ctx, service } = this;
    console.log(ctx);
    ctx.body = {
      msg:'hi, egg'
    }
    ctx.status = 200;
  }
}

module.exports = HomeController;
