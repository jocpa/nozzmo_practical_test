const { url } = require("../config/config");
import formElements from "../pages/formElements"

///<reference types="cypress" />

describe('Formulario de contacto vacio', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => { // codigo para evitar un uncaught exception en la aplicacion
        return false;
      });

      beforeEach(() => {
        cy.visit(url)
    })
   
    it('Dejando vacios los campos del formulario', () => {
        cy.viewport(1200, 784)         

        //llenando formulario
        formElements.typeName(' ')
        formElements.typeEmail(' ')
        formElements.typeMore(' ')
        formElements.clickBtn()

        //Assert
        formElements.elements.errorAlert().should('be.visible')
        
    });

    
})