export class FormSubmitPage {
    nameInputLocator: string = '#title'
    messageInputLocator: string = '#description'
    submitButtonLocator: string = '#btn-submit'
    successMessageLocator: string = '#submit-control'

    enterName(name: string): this {
        cy.get(this.nameInputLocator).type(name)
        return this
    }

    enterMessage(message: string): this {
        cy.get(this.messageInputLocator).type(message)
        return this
    }

    clickSubmitButton(): this {
        cy.get(this.submitButtonLocator).click()
        return this
    }

    verifyErrorField(): this {
        cy.get(this.nameInputLocator).should('have.css', 'border').and('eq', '1px solid rgb(255, 0, 0)')
        return this
    }

    submitFormWithData(name: string, message: string): this {
        this.enterName(name).enterMessage(message).clickSubmitButton()
        return this
    }

    verifySuccessMessage(): this {
        cy.get(this.successMessageLocator).should('have.text', '  Ajax Request is Processing!')
        return this
    }
}