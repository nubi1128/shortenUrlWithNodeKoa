import Router from 'koa-router'
import {expandUrlController } from '../controller/expand.mjs';

const router = new Router();

router.get('/expand/:shortUrl', async ctx => expandUrlController(ctx))

export default router;
