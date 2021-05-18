import Models from '../models';
import config from '../config/config.json'

const hostName = config["hostName"]
const expandPath = "expand"

let count = 0

function shortenUrlExec(url) {
	count += 1

	var modelUrl = {
		Num: count,
		Url: url,
		createdAt: new Date()
	};
	
	Models.Url.create(modelUrl);
	return count
}

export function getShortenHtmlController(ctx) {
	ctx.response.body = `
		<form action="./shorten" method="post">
			<input type="text" name="target">
			<input type="submit" value="submit">
		</form>
	`
}

export function shortenUrlController(ctx) {
	try {
		let url = ctx.request.body.target;
		let shortUrlSegment = shortenUrlExec(url);

		let shortUrl = `${hostName}/${expandPath}/${shortUrlSegment}`;
		console.log("shortUrl ", shortUrl);
		ctx.response.body = `
		<p>
			Before shorten: ${url} <br>
			After shorten:  <a href=${shortUrl}>${shortUrl}</a>
		</p>
		`;
	} 
	catch (error) {
		ctx.response.body = error;
	}
};
