export class HomePage{
    pageTitleText: string = "Selenium Playground"
    pageTitleLocator: string = ".text-size-50"

    verifyHomePageLoaded(): this {
        cy.get(this.pageTitleLocator).should('have.text',this.pageTitleText)
        return this
    }

    clickLinkToPage(pageName: string): this {
        cy.contains(pageName).click()
        return this
    }
}