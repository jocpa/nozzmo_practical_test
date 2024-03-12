
class formElements {

    elements = {

        logo: () => cy.get('.items-start > .appearing-turn-1'),
        h1Title: () => cy.get('.items-start > .font-light > span'),
        inputName: () => cy.get('#name'),
        inputEmail: () => cy.get('#email'),
        inputMore: () => cy.get('#more'),
        sendBtn: () => cy.xpath('/html/body/main/article/section[1]/div/div/div[2]/div/form/button'),
        errorAlert: () => cy.get('.animate-appear')
    
    }

    typeName( name ) {
        this.elements.inputName().type(name)
    }
    typeEmail( email ) {
        this.elements.inputEmail().type(email)
    }
    typeMore( more ) {
        this.elements.inputMore().type(more)
    }
    clickBtn() {
        this.elements.sendBtn().click()
    }

}
module.exports = new formElements;

