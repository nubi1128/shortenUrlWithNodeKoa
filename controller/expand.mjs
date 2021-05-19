import Models from '../models';

async function getUrlByNum(uuid) {
	return await Models.Url.findOne({where: {uuid: uuid}})
}

export async function expandUrlController(ctx) {
	let uuid = ctx.params.shortUrl;
	let obj = await getUrlByNum(uuid);
	if (obj == null) {
		ctx.redirect('/shorten');
		return;
	}

	let url = obj.dataValues.originalUrl;
	ctx.redirect(url);
}
