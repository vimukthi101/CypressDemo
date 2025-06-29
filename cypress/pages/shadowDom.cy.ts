export class ShadowDom{
    shadowElementLocator: string = '#shadow_host'

    shadowDomFormFill(): this {
        cy.get(this.shadowElementLocator).shadow().find('[placeholder="Name"]').type('vimu')
        cy.get(this.shadowElementLocator).shadow().find('[placeholder="Name"]').should('have.value', 'vimu')
        return this
    }
}