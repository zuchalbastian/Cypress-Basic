/// <reference types = "cypress" />

it('Google Test', function () {

    cy.visit('https://www.google.com/')

    cy.get('#APjFqb').type('Automation Step By Step{enter}')

    cy.get(':nth-child(4) > .cIkxbf > .usJj9c > :nth-child(1) > .VttTV > :nth-child(1) > h3 > .l').click()
})