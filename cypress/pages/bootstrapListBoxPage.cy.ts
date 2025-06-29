export class BootstrapListBoxPage {
    leftListLocator: string = '.list-left > .well > .list-group'
    rightListLocator: string = '.list-right > .well > .list-group'
    moveRightArrowLocator: string = '.move-right'
    moveLeftArrowLocator: string = '.move-left'

    selectItemFromLeftList(name: string): this {
        cy.get(this.leftListLocator).contains('li', name).click()
        cy.get(this.leftListLocator).contains('li', name).should('have.class', 'active')
        return this
    }

    selectItemFromRightList(name: string): this {
        cy.get(this.rightListLocator).contains('li', name).click()
        cy.get(this.rightListLocator).contains('li', name).should('have.class', 'active')
        return this
    }

    clickMoveRightArrowLocator(): this {
        cy.get(this.moveRightArrowLocator).click()
        return this
    }

    clickMoveLeftArrowLocator(): this {
        cy.get(this.moveLeftArrowLocator).click()
        return this
    }

    verifyLeftListSize(): Cypress.Chainable<number> {
        return cy.get(this.leftListLocator).find('li').then($items => {
            const count = $items.length
            return count
        })
    }

    verifyRightListSize(): Cypress.Chainable<number> {
        return cy.get(this.rightListLocator).find('li').then($items => {
            const count = $items.length
            return count
        })
    }
}