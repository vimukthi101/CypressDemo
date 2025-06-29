import pages from '../pages/index.cy';

export class Base{
    baseUrl = Cypress.config('baseUrl')

    openPage(): void {
        cy.visit('/')
        pages.homePage.verifyHomePageLoaded()
    }
}