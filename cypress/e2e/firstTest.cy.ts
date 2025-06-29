import pages from '../pages/index.cy';

beforeEach(() => {
    pages.base.openPage()
})

describe('Form Submit Demo Page', () => {
    beforeEach(() => {
        pages.homePage.clickLinkToPage('Ajax Form Submit')
    })

    it('Verify error message for submitting form without data', () => {
        pages.formSubmitPage.clickSubmitButton().verifyErrorField()
    })

    it('Verify submitting form with data', () => {
        pages.formSubmitPage.submitFormWithData('name', 'message').verifySuccessMessage()
    })
})

describe('Bootstrap List Box Page', () => {
    beforeEach(() => {
        pages.homePage.clickLinkToPage('Bootstrap List Box')
    })

    it('Verify we can move items from left list to right', () => {
        pages.bootstrapListBoxPage.verifyLeftListSize().then(count => {
            expect(count).to.be.eq(3)
        })
        pages.bootstrapListBoxPage.verifyRightListSize().then(count => {
            expect(count).to.be.eq(3)
        })
        pages.bootstrapListBoxPage.selectItemFromLeftList('Danville').clickMoveRightArrowLocator()
        pages.bootstrapListBoxPage.verifyLeftListSize().then(count => {
            expect(count).to.be.eq(2)
        })
        pages.bootstrapListBoxPage.verifyRightListSize().then(count => {
            expect(count).to.be.eq(4)
        })
    })
})

describe('Check Box Page', () => {
    beforeEach(() => {
        pages.homePage.clickLinkToPage('Checkbox Demo')
    })

    it('Verify check/uncheck checkbox', () => {
        pages.checkBoxPage.selectSingleCheckBox()
    })
})

describe('Drag & Drop Sliders Page', () => {
    beforeEach(() => {
        pages.homePage.clickLinkToPage('Drag & Drop Sliders')
    })

    it('Verify Drag & Drop Sliders', () => {
        pages.dragAndDropSlider.dragAndDropSlider(50)
    })
})

describe('Alert Box Page', () => {
    beforeEach(() => {
        pages.homePage.clickLinkToPage('Javascript Alerts')
    })

    it('Verify Javascript Alerts', () => {
        pages.alertBoxPage.clickAlertBox().verifyContentOnAlertBox('I am an alert box!')
    })

    it('Verify Confirm Box', () => {
        pages.alertBoxPage.clickConfirmBox().verifyContentOnAlertBox('Press a button!')
    })

    it('Verify Prompt Box', () => {
        pages.alertBoxPage.enterNameOnPromptBox('Vim')
    })
})

describe('JQuery Select dropdown Page', () => {
    beforeEach(() => {
        pages.homePage.clickLinkToPage('JQuery Select dropdown')
    })

    it('Verify JQuery Select dropdown', () => {
        pages.dropDownPage.selectCountryDropDown()
    })
})

describe('Shadow DOM Page', () => {
    beforeEach(() => {
        pages.homePage.clickLinkToPage('Shadow DOM')
    })

    it('Verify Shadow DOM', () => {
        pages.shadowDom.shadowDomFormFill()
    })
})

describe('Table Data Search Page', () => {
    beforeEach(() => {
        pages.homePage.clickLinkToPage('Table Data Search')
    })

    it('Verify Table Data Search', () => {
        pages.tableSearch.tableData()
        pages.tableSearch.getFirstRow()
        pages.tableSearch.getFirstCell()
    })
})

describe.only('Upload File Demo Page', () => {
    beforeEach(() => {
        pages.homePage.clickLinkToPage('Upload File Demo')
    })

    it('Verify Upload File Demo', () => {
        pages.uploadFileDemo.uploadFile()
    })
})