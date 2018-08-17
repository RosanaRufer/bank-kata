const { Account } = require("./bank-account");

describe('BankAccount', () => {


    it('Should return no statements when account is new', () => {
        const account = new Account();
        const result = account.statementsCount();
        expect(result).toBe(0)
    });

    it('Should have one statement after first deposit', () => {
        const account = new Account();
        account.makeDeposit(100);
        const result = account.statementsCount();
        expect(result).toBe(1);
    });


});