class EnviromentVariables {
    constructor() {
        this.port = process.port || 3000;
    }

}
module.exports = new EnviromentVariables();