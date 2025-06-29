export class DragAndDropSlider {
    sliderLocator: string = '#slider1 > div.sp__range > .sp__range'

    dragAndDropSlider(value: number): this {
        cy.get(this.sliderLocator).trigger('mousedown', {which: 1})
        cy.get(this.sliderLocator).trigger('mousemove', {clientX: 200})
        cy.get(this.sliderLocator).trigger('mouseup')
        // cy.get(this.sliderLocator).click(200,0)
        return this
    }
}