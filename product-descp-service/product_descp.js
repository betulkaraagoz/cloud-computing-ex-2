const mockData = require("./MOCK_DATA.json");
module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product, cmd:getProductURL', productURL);
    this.add('role:product, cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
        for (i=0; i<mockData.length; i++){
            if(mockData[i].product_id.toString() === msg.productId.toString()){
                respond(null, { result: mockData[i].product_url });
            }
        }
    }

    function productName(msg, respond) {
        for (i=0; i<mockData.length; i++){
            if(mockData[i].product_id.toString() === msg.productId){
                respond(null, { result: mockData[i].product_name });
            }
        }
    }
}