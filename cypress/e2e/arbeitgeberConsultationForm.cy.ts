import { homePage } from '../pages/homePage'
import { arbeitgeberPage } from '../pages/arbeitgeberPage'

describe('Arbeitgeber', () => {
  beforeEach(() => {
    cy.viewport('iphone-8')
    cy.visit('https://testing.powerus.de/')
    cy.wait(3000) // Needed, as the page in unresponsibe to clicks
  })

  it('can submit a free consultation', () => {
    homePage.openMenu()
    homePage.validateMenuIsOpen()
    homePage.clickFurArbeitLink()
    homePage.validateFurArbeitPage()

    arbeitgeberPage.clickBeratungVereinbarenButton()
    arbeitgeberPage.clickElektronikBox()
    arbeitgeberPage.clickAnlagenmechanikBox()
    arbeitgeberPage.clickFunnelWeiterButton()
    arbeitgeberPage.clickThreePositionsChip()
    arbeitgeberPage.enterCity('Berlin')
    arbeitgeberPage.clickLocationWeiterButton()
    arbeitgeberPage.enterUnternehmen('PowerUs')
    arbeitgeberPage.clickLastStepButton()
    arbeitgeberPage.enterFirstName('Max')
    arbeitgeberPage.enterLastName('Mustermann')
    arbeitgeberPage.enterEmail('max.mustermann@powerus.com')
    arbeitgeberPage.enterPhone('15143211257')

    arbeitgeberPage.clickSubmitButton()

    const firstTitle = cy.get('h1').first()
    firstTitle.should('include.text', 'Super')
  })
})