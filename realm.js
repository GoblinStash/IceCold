module.exports = function (connector) {
    // console.log('auction: ' + app);
    class realm {
        constructor() {
            
        }
        
        status(server) {
            console.log("STATUS");
            return connector.get(`/wow/realm/status`)
            .then(reply => {
                return reply;
            })
        }
    }
    
    return realm;
}
