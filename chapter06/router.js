const router = require('koa-router')()
const file = require('./control');

const create = (ctx) => {
  ctx.response.body = 'get123'
}
const progress = (ctx) => {
  ctx.response.body = 'get1234'
}

router.get('/file', file)
// 监测接口
router.get('/get1234', progress)

module.exports = router;
