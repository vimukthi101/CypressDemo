export class UploadFileDemo{
    fileUploadLocator: string = '#file'

    uploadFile(): this {
        cy.get(this.fileUploadLocator).attachFile('example.json')
        return this
    }
}