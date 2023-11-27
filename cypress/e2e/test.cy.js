/// <reference types = "cypress" />

it('Google Test', function () {

    cy.visit('https://www.google.com/')

    cy.get('#APjFqb').type('Automation Step By Step{enter}')

    // cy.get(':nth-child(4) > .cIkxbf > .usJj9c > :nth-child(1) > .VttTV > :nth-child(1) > h3 > .l').click()
    cy.wait(3000)
    cy.contains('Video').click()
})

it.only('login test', function () {

    //.should('be.visible') -> Wait for an element to be visible
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click().should('be.visible')

    
    cy.get(':nth-child(1) > .oxd-main-menu-item').click().should('be.visible')
    cy.get('.orangehrm-header-container > .oxd-button').click().should('be.visible')
    // cy.get('.orangehrm-card-container').find('.oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space').click() -> FAIL because in web haven't id
    cy.contains('Save').click().should('be.visible')
})