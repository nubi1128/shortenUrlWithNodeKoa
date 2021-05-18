import Models from '../models';

async function getUrlByShorten(shortUrl) {
	console.log("shortUrl" + shortUrl);
	return await Models.Url.findOne({where: {Num: shortUrl}})
}

export async function expandUrlController(ctx) {
	let shortUrl = parseInt(ctx.params.shortUrl);
	if (isNaN(shortUrl)) {
		ctx.redirect('/shorten');
		return
	} 
	let obj = await getUrlByShorten(shortUrl);
	let url = obj.dataValues.Url;
	ctx.redirect(url);
}
