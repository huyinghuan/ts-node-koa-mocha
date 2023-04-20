import Router from 'koa-router';
import { ReturnData } from './rcode';
const PKG = require('../package.json');
const router = new Router();
router.get('/version', (ctx, next) => {
    ctx.body = ReturnData({ version: PKG.version });
});

export default router
