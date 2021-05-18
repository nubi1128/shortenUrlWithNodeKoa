import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import Sequelize from 'sequelize';
import config from './config/config.json'
import expand from './routes/expand'
import shorten from './routes/shorten'

let env = process.env.NODE_ENV || 'development';
let configEnv = config[env];
var sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, configEnv);

const app = new Koa();

app.use(
	BodyParser({onerror: (err, ctx) => console.log("Error!", err)})
);
app.use(expand.routes());
app.use(shorten.routes());

app.listen(3000);
