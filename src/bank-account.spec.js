const { Account } = require("./bank-account");

describe('BankAccount', () => {

    describe('When first created', () => {

        let account;

        beforeEach( () => {
            account = new Account();
        });

        it('Should return no statements when account is new', () => {
            const result = account.statementsCount();
            expect(result).toBe(0)
        });

        it('Should have one statement after first deposit', () => {
            account.makeDeposit(100);
            const result = account.statementsCount();
            expect(result).toBe(1);
        });

        it('Should increment statements by 1 after withdrawal', () => {
            account.withdraw(100);
            const result = account.statementsCount();
            expect(result).toBe(1);
        });
    });

});