export class TableSearch{
    tableLocator: string = '#task-table > tbody > tr'

    tableData(): this {
        cy.get(this.tableLocator).each(($row, $index)=>{
            const rowText = $row.text()
            cy.log(rowText)
        })
        return this
    }

    getFirstRow(): this{
        cy.get(this.tableLocator).first().then(($row)=>{
            cy.log($row.text())
        })
        return this
    }

    getFirstCell(): this{
        cy.get(this.tableLocator).find('td').first().then(($row)=>{
            cy.log($row.text())
        })
        return this
    }
}