
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
};

module.exports = {
    Account
};

