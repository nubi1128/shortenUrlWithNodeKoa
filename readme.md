# Url Shorten Service #

The backend framework is Node Koa
### Run Service with Test mode ###
```
NODE_ENV=test node --experimental-modules server.mjs
```

### Create Table for Test Mode  ###
Please check `/config/config.json` for environment setting
```
NODE_ENV=test node_modules/.bin/sequelize db:migrate
```

### APIs ###
1. **shorten URL**
Method: POST
URI: `/shorten`
Request Body Sample:
```
{
	"originalUrl": "https://google.com"
}
```

2. **expand URL**
Method: GET
URI: `/expand/1`
Response: 
```
	Success: 302 Redirect to target URL
	Fail: 302 Redirect to /short
```
