
class Statement {

    constructor(amount) {
        this.amount = amount;
    }
}

class Account {


    constructor() {
        this.statements = [];
    }

    statementsCount(){
        return this.statements.length;
    }

    makeDeposit(amount){
        this.statements.push(new Statement(amount));
    }

    withdraw(amount){
        this.statements.push(new Statement(-Math.abs(amount)));
    }

    getLastStatement() {
        return this.statements[this.statements.length -1];
    }
};

module.exports = {
    Account
};