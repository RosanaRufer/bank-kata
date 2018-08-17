
class Account {

    constructor() {
        this.statements = 0;
    }

    statementsCount(){
        return this.statements;
    }

    makeDeposit(){
        this.statements++;
    }
    withdraw(){

    }
};

module.exports = {
    Account
};

