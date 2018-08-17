describe('BankAccount', () => {

    describe('Statement printing', () => {
        it('Should return no statements when account is new', () => {
            // Arrange
            const account = new Account();

            // Act
            const result = account.statementsCount();

            // Assert
            expect(result).toBe(0)
        });
    });
});