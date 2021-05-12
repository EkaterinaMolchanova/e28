
describe('Login Page', () =>
{

    const user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    it('shows an error if login is invalid', () =>
    {
        cy.visit('/login');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type('this-password-should-not-work');
        cy.get('[data-test=login-button]').click();
        cy.contains('These credentials do not match our records');
    })

    it('lets a user log in, redirect to favorites page, get favorite post and log out', () =>
    {
        cy.visit('/login');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();

        cy.contains('[data-test="welcome-message"]', user.name);

        cy.contains('Blue marble travel mug')

        cy.get('[data-test=logout-button]').click();

        cy.contains('add and see your favorites');
    })
})