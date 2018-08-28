var rp = require('request-promise');

class connector {
    constructor(token) {
        this.api = 'https://us.api.battle.net/';
        this.token = token;
        this.locale = 'en_US';
    }
    
    get(url, params) {
        var options = {
            uri: this.api + url,
            qs: {
                apikey:   this.token,
                locale:   this.locale,
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response
        };
        return rp(options)
        .then(reply => {
            return reply;
        });
    }
    
    files(url) {
        var options = {
            uri: url,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response
        }
        return rp(options)
        .then(reply => {
            return reply;
        })
        .catch(e => {
            console.log(e);
        })
    }
}

module.exports = connector;