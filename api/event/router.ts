'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Controller from './controller';

const router = KoaJoiRouter();
const Joi = KoaJoiRouter.Joi;

router.prefix('/event');

router.route({
    path: '/',
    method: 'GET',
    handler: Controller.listEvents
});

export default router;