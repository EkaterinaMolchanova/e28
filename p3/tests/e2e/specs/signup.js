
describe('Sign up Page', () =>
{

    const user = {
        name: 'Kate',
        email: 'Kate' + Math.floor(Math.random() * 10000) + '@harvard.edu',
        password: 'asdfasdf'
    }

    it('shows an error if email is used already', () =>
    {
        cy.visit('/signup');
        cy.get('[data-test=email-input]').clear().type('Kate@harvard.edu');
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=signup-button]').click();
        cy.contains('The email has already been taken');
    })

    it('lets a user to create account, redirect to favorites page and log out', () =>
    {
        cy.visit('/signup');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=signup-button]').click();

        cy.contains('[data-test="welcome-message"]', user.name);

        cy.get('[data-test=logout-button]').click();

        cy.contains('add and see your favorites');
    })
})