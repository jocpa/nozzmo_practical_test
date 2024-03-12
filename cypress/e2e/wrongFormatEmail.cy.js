const { url } = require("../config/config");
import formElements from "../pages/formElements"

///<reference types="cypress" />

describe('Formato incorrecto formulario de contacto', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => { // codigo para evitar un uncaught exception en la aplicacion
        return false;
      });

      beforeEach(() => {
        cy.visit(url)
    })
   
    it('Dejando vacios los campos del formulario', () => {
        cy.viewport(1200, 784)         

        //llenando formulario
        formElements.typeName('Miles Morales')
        formElements.typeEmail(' ')
        formElements.typeMore('Yo soy Miles morales')
        formElements.clickBtn()

        //Assert
        formElements.elements.errorAlert().invoke('text').should('contains', 'Must be a valid email')
        
    });

    
})