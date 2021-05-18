import Router from 'koa-router'
import {getShortenHtmlController, shortenUrlController } from '../controller/shorten.mjs';

const router =  new Router();

router.get('/shorten', ctx => getShortenHtmlController(ctx));
router.post('/shorten', ctx => shortenUrlController(ctx));

export default router
