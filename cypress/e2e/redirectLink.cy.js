const { url } = require("../config/config");
import linkElements from "../pages/linksElements"

///<reference types="cypress" />

describe('Probando el redirect de todos los enlaces', () => {

    Cypress.on('uncaught:exception', (err, runnable) => { // codigo para evitar un uncaught exception en la aplicacion
        return false;
      });

      beforeEach(() => {
        cy.visit(url)
    })
   
    it('Click Enlace del header', () => {
        cy.viewport(1200, 784)
        linkElements.clickLink1()
    });

    it('Click a Schedule a consultation 1', () => {
        cy.viewport(1200, 784)
        linkElements.clickLink2()
    });

    it('Click a Schedule a consultation 2', () => {
        cy.viewport(1200, 784)
        linkElements.clickLink3()
    });

    it('Click a Schedule a consultation 3', () => {
        cy.viewport(1200, 784)
        linkElements.clickLink4()
    });

    it('Click a Schedule a consultation 4', () => {
        cy.viewport(1200, 784)
        linkElements.clickLink5()
    });


    
})