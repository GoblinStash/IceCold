module.exports = function (connector) {
    // console.log('auction: ' + app);
    class auction {
        constructor() {
            
        }
        
        get(server) {
            return connector.get(`/wow/auction/data/${server}`)
            .then(reply => {
                // var response = [];
                var promises = [];
                if(reply && reply.files) {
                    return connector.files(reply.files[0].url);
                } else {
                    return "No reply";
                }
            })
        }
    }
    
    return auction;
}
