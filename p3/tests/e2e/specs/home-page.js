
describe('Home Page', () =>
{
    it('Visits the home page', () =>
    {
        cy.visit('/')
        cy.contains('h2', `Hello, I'm Kate. Welcome to my blog!`)

        //random component in place
        cy.contains('h2', 'Featured posts')

        //random component shows 3 posts

        cy.get('[data-test="random-product"]').its('length').should('be', 3)

    })
})