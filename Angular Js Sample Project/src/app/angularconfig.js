angular.module('app.config',[]).constant('env','production')
.value('config', {

	production: {
	    apiURL:  'https://epic-staging.easyparksystem.net/epic-rest/v1' ,// Set your base path here
	    siteurl:  '',
	    mobileWeburl : '',
	    OauthUrl : 'https://epic-staging.easyparksystem.net/epic-rest/oauth/token',
	    username: 'nevaventures',
	    password: 'm3AeSvqdF9xa',
	},

	stagging: {
	    apiURL:  'https://epic-staging.easyparksystem.net/epic-rest/v1' ,// Set your base path here
	    siteurl:  '',
	    mobileWeburl : '',
	    OauthUrl : 'https://epic-staging.easyparksystem.net/epic-rest/oauth/token',
	    username: 'nevaventures',
	    password: 'm3AeSvqdF9xa',
	},

	development: {
	    apiURL:  'https://epic-staging.easyparksystem.net/epic-rest/v1' ,// Set your base path here
	    siteurl:  '',
	    mobileWeburl : '',
	    OauthUrl : 'https://epic-staging.easyparksystem.net/epic-rest/oauth/token',
	    username: 'nevaventures',
	    password: 'm3AeSvqdF9xa',
	}
});
