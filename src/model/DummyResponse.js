module.exports =  class DummyResponse {
    constructor(statusCode, body){
        console.log(statusCode)
        // this.statusCode = statusCode;
        // this.body = body          
    }

    get statusCode (){
        return this.statusCode
    }

    get body() {
        return this.body
    }
}