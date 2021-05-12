describe('Add Post Page', () =>
{

    // Test product
    const post = {
        title: 'My New Post',
        sku: 'my-new-post-' + Date.now(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pulvinar libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        color: 'white',
        link: 'my-new-link' + Date.now(),
    }

    it('adds a new post', () =>
    {
        cy.login();

        // Go to the "Add a post page"
        cy.visit('/post/new');

        // Enter the details for a new product
        cy.get('[data-test=post-title-input]').clear().type(post.title);
        cy.get('[data-test=post-sku-input]').clear().type(post.sku);
        cy.get('[data-test=post-color-input]').clear().type(post.color);
        cy.get('[data-test=post-link-input]').clear().type(post.link);
        cy.get('[data-test=post-category-radio]').check();
        cy.get('[data-test=post-description-textarea]').clear().type(post.description);
        cy.get('[data-test=post-description-textarea]').blur();

        // Submit the form
        cy.get('[data-test=add-post-button]').click();

        // Confirm getting a confirmation message
        cy.get('[data-test=post-added-confirmation]').should('exist');

        // Go to the all posts page and confirm the new post is there
        cy.visit('/posts');
        cy.contains(post.title);

        cy.get('[data-test=logout-button]').click();
    });

    it('shows error messages when blurring off a field', () =>
    {

        cy.login();

        // Go to the "Add a post page"
        cy.visit('/post/new');

        // Make sure post title input is blank
        cy.get('[data-test=post-title-input]').clear();

        // Click on the next field to trigger the client-side validation
        cy.get('[data-test=post-sku-input]').click();

        // Assert we see validation feedback
        cy.contains("The title is required and should be at least 10 characters long.");

        cy.get('[data-test=logout-button]').click();
    });

    it('shows error messages if the sku is already taken', () =>
    {

        cy.login();

        // Go to the "Add a post page"
        cy.visit('/post/new');

        cy.get('[data-test=post-title-input]').clear().type(post.title);
        cy.get('[data-test=post-color-input]').clear().type(post.color);
        cy.get('[data-test=post-link-input]').clear().type(post.link);
        cy.get('[data-test=post-category-radio]').check();
        cy.get('[data-test=post-description-textarea]').clear().type(post.description);

        // Try a SKU we know is taken
        cy.get('[data-test=post-sku-input]').clear().type('marble-blue-and-white-acrylic-liquid-art-travel-mugs');
        cy.get('[data-test=post-sku-input]').blur();
        cy.get('[data-test=add-post-button]').click();

        // Assert we see validation feedback
        cy.contains("The item's SKU is required and should be unique.");
    });
})