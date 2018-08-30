module.exports = function (connector) {
    // console.log('auction: ' + app);
    class realm {
        constructor() {
            
        }
        
        status(server) {
            console.log("STATUS");
            return connector.get(`/wow/realm/status`)
            .then(reply => {
                // console.log(reply);
                return reply;
            })
            .catch(e => {
                console.log(e);
            })
        }
    }
    
    return realm;
}
