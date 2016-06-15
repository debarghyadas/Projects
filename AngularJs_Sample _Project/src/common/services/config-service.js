angular.module('config.service', ['app.config', 'base64'])
	.factory('configService', function(env, config, $base64) {
		return {
			getConfigValue: function(name) {
				return config[env][name];
			},
			getEnvConfig: function() {
				return config[env];
			},
			getAuthoriseHeader: function(obj,key) {
				obj = obj || {};
				key = key || false;
				var d = {
					// "Authorization": 'Basic bmV2YXZlbnR1cmVzOm0zQWVTdnFkRjl4YQ==',
					"Authorization": 'Basic ' + $base64.encode(config[env].username + ':' + config[env].password),
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
				};
				var header = angular.extend(d, obj);
				if(key){
					delete header[key];
				}
				console.log(header);
				return header;
			},
			getFullServiceUrl: function(uri) {
				if (uri.indexOf('/') != 0) {
					uri = '/' + uri;
				}
				return this.getEnvConfig().apiURL + uri;
			},
			getSignedHeader: function(obj,key) {
				obj = obj || {};
				key = key || {};
				var d = {
					"Authorization": 'Bearer ' + localStorage.getItem('access_token'),
					'Content-Type': 'application/json'
				};
				var header = angular.extend(d, obj);
				if(key){
					delete header[key];
				}
				console.log(header);
				return header;
			}
		};
	});