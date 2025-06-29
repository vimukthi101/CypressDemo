export class AlertBoxPage{
    alertBoxLocator: string = '.w-full > :nth-child(1) > .text-gray-900 > .btn'
    confirmBoxLocator: string = '.ml-10 > .text-gray-900 > .btn'
    promptBoxLocator: string = ':nth-child(3) > .text-gray-900 > .btn'

    clickAlertBox(): this {
        cy.get(this.alertBoxLocator).click()
        return this
    }

    clickConfirmBox(): this {
        cy.get(this.confirmBoxLocator).click()
        return this
    }

    verifyContentOnAlertBox(text: string): this {
        cy.on('window:alert', (text) => {
            expect(text).to.be.eq(text)
        })
        return this
    }

    enterNameOnPromptBox(text: string): this {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(text)
        })
        cy.get(this.promptBoxLocator).click()
        cy.get('#prompt-demo').should('contain.text', `You have entered '${text}' !`);
        return this
    }
}