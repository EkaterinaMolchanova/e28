describe('All Posts Page', () =>
{

    // Define a product we can use throughout our tests
    const post = {
        title: 'Blue marble travel mug',
        id: 1,
        sku: 'marble-blue-and-white-acrylic-liquid-art-travel-mugs',
        color: 'blue'
    }

    it('shows all posts', () =>
    {
        cy.visit('/posts')

        // confirm at least 12 posts on the page
        cy.get('[data-test="post-title"]').its('length').should('be.gte', 12)

        // confirm a test post is omn the page
        cy.contains('[data-test="post-title"]', post.title)

        // confirm click on the post goes to its individual page
        cy.get('[data-test="post-title"]').contains(post.title).click();

        // confirm the test post page loads
        cy.contains('h1', post.title)
        cy.url().should('include', post.id)

    })

    it('shows the correct post', () =>
    {

        cy.visit('/posts')

        cy.get('[data-test=post-image-' + post.sku + ']')
            .should('have.attr', 'src')
            .should('include', post.sku)
    })

    it('uses color selector', () =>
    {
        cy.visit('/posts')
        //confirm color selector in place
        cy.contains('p', 'Choose posts by color:')

        //confirm color selector operates
        cy.get('[type="radio"]').first().check()

        cy.contains('black').click()

        cy.get('[data-test="color-button"]').click()

        cy.get('[data-test="post-title"]').its('length').should('be', 2)
    })

})