
class linkElements {

    elements = {

        link1: () => cy.get('.font-bold'),
        link2: () => cy.get('.max-w-xl > .inline-block'),
        link3: () => cy.get('.bg-slate-100.text-center > .max-w-7xl > .py-24 > .inline-block'),
        link4: () => cy.get('.bg-black.items-center > .max-w-7xl > .py-24 > .inline-block'),
        link5: () => cy.get('.flex > .inline-block')

    }
    clickLink1() {
        this.elements.link1().click()
    }
    clickLink2() {
        this.elements.link2().click()
    }
    clickLink3() {
        this.elements.link3().click()
    }
    clickLink4() {
        this.elements.link4().click()
    }
    clickLink5() {
        this.elements.link5().click()
    }

}
module.exports = new linkElements