import Models from '../models';
import config from '../config/config.json'
import Sequelize from 'sequelize';
const hostName = config["hostName"]
const expandPath = "expand"

function shortenUrlExec(url) {
	let time = Date.now();
	let uuid = time.toString();
	let modelUrl = {
		uuid: uuid,
		originalUrl: url,
		createdAt: new Date()
	};
	
	Models.Url.create(modelUrl);
	
	return uuid
}

function beforeShortenView() {
	return `
		<form action="./shorten" method="post">
			<input type="text" name="target">
			<input type="submit" value="submit">
		</form>
	`
}

function afterShortenView(url, shortUrl) {
	return ` 
		<p>
			Before shorten: ${url} <br>
			After shorten:  <a href=${shortUrl}>${shortUrl}</a>
		</p>
	`
}
export function getShortenHtmlController(ctx) {
	ctx.response.body = beforeShortenView()
}

export function shortenUrlController(ctx) {
	try {
		let url = ctx.request.body.target;
		let shortUrlSegment = shortenUrlExec(url);

		let shortUrl = `${hostName}/${expandPath}/${shortUrlSegment}`;
		console.log("shortUrl ", shortUrl);
		ctx.response.body = afterShortenView(url, shortUrl);
	} 
	catch (error) {
		ctx.response.body = error;
	}
};
