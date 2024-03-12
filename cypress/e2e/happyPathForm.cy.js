
const { url } = require("../config/config");
import formElements from "../pages/formElements"

///<reference types="cypress" />

describe('Happy path formulario de contacto', () => {
    

    Cypress.on('uncaught:exception', (err, runnable) => { // codigo para evitar un uncaught exception en la aplicacion
        return false;
      });

      beforeEach(() => {
        cy.visit(url)
    })
   
    it('Llenando todos los datos correctos en el formulario', () => {
        cy.viewport(1200, 784)

        //Asserts
        formElements.elements.logo().should('exist')
        formElements.elements.h1Title().invoke('text')
                                        .should('contains', 'Your Partner for Hiring')                          
        //llenando formulario
        formElements.typeName('Pablo Arzu')
        formElements.typeEmail('Pablo.arzu@pruebas.com')
        formElements.typeMore('Esto es una descripcion de pruebas para el proceso de reclutamiento')
        formElements.clickBtn()
        
    });

    
})