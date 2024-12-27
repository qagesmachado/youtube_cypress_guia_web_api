/// <reference types="cypress" />

describe('My First Test', () => {
  it('Teste', () => {
    cy.visit('https://example.cypress.io/')
    cy.get('h1').click().contains('Kitchen Sink')
  })

  })