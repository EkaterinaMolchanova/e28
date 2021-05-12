
describe('Route Guards', () =>
{

    it('denies access to guests to auth-required page', () =>
    {
        cy.visit('/post/new');
        cy.contains('to see this page');
    })

    it('denies access to guests to auth-required page when navigating from another page', () =>
    {
        cy.visit('/');
        cy.get('[data-test="nav-link-create new post"]').click();
        cy.contains('to see this page');
    })

    it('allows access to logged in users to auth-required page', () =>
    {
        cy.login();
        cy.visit('/post/new');
        cy.contains('to see this page').should('not.exist');
    })

    it('allows access to logged in users to auth-required page when navigating from another page', () =>
    {
        cy.login();
        cy.visit('/');
        cy.get('[data-test="nav-link-create new post"]').click();
        cy.contains('to see this page').should('not.exist');
    })

})