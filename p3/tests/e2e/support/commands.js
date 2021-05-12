// User
const user = {
    id: 1,
    name: 'Jill Harvard',
    email: 'jill@harvard.edu',
    password: 'asdfasdf'
}

Cypress.Commands.add('login', () =>
{
    cy.visit('/login');
    cy.get('[data-test=email-input]').clear().type(user.email);
    cy.get('[data-test=password-input]').clear().type(user.password);
    cy.get('[data-test=login-button]').click();
    cy.contains('[data-test="welcome-message"]', user.name);
})


