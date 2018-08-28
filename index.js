var connector = require('./connector');


class icecold {
    constructor(apikey) {
        var c = new connector(apikey);
        var auction     = require('./auction')(c);
        var realm       = require('./realm')(c);
        
        this.auction    = new auction();
        this.realm      = new realm();
    }
}

module.exports = icecold;