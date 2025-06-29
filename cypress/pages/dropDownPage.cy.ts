export class DropDownPage{
    countryDropDownLocator: string = '#country'

    selectCountryDropDown(): this {
        cy.get(this.countryDropDownLocator).select('Japan', {force: true})
        return this
    }
}