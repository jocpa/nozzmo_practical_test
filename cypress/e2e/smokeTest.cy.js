///<reference types="cypress" />

describe('Smoke Test', () => {

  Cypress.on('uncaught:exception', (err, runnable) => { // codigo para evitar un uncaught exception en la aplicacion
    return false;
  });

  const url = 'https://nozzmo.com/recruiting'

  it('passes', () => {
    cy.visit(url)
  })

})