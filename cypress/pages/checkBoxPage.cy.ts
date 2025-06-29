export class CheckBoxPage{
    singleCheckBoxLocator: string = ':nth-child(1) > label > input'

    selectSingleCheckBox(): this {
        cy.get(this.singleCheckBoxLocator).should('not.be.checked')
        cy.get(this.singleCheckBoxLocator).check()
        cy.get(this.singleCheckBoxLocator).should('be.checked')
        return this
    }
}