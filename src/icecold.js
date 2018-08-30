var connector = require('./connector');


class icecold {
    constructor(apikey) {
        var c = new connector(apikey);
        var auction     = require('./wow/auction')(c);
        var realm       = require('./wow/realm')(c);
        
        this.wow = {
            auction:    new auction(),
            realm:      new realm()
        }
        // this.auction    = new auction();
        // this.realm      = new realm();
    }
}

module.exports = icecold;