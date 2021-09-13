/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Peoples page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('allows to search peoples', () => {
    cy.get('[data-cy=personCard]')
      .should('have.length', 20)
      .get('[data-cy=personCardName]')
      .first()
      .invoke('text')
      .then((text) => {
        cy.get('[data-cy=searchInput]').first().type(text)

        cy.get('[data-cy=personCard]').should('have.length', 1)
      })
  })
})
