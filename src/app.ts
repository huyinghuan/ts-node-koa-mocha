import Koa from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';

import { ReturnCode } from './rcode';
const PKG = require('../package.json');

const app = new Koa();
const router = new Router();

router.get('/api/version', (ctx, next) => {
    ctx.body = ReturnCode({ version: PKG.version });
});

app.use(cors(
    {
        origin: '*',
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    }
))
app.use(router.routes());
export default app