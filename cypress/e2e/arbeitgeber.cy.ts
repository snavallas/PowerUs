import { homePage } from '../pages/homePage'
import { arbeitgeberPage } from '../pages/arbeitgeberPage'

describe('Arbeitgeber', () => {
  beforeEach(() => {
    cy.viewport('iphone-8')
    homePage.visit()
    homePage.openMenu()
    homePage.navigateToFurArbeitPage()
  })

  it('can submit a free consultation', () => {

    arbeitgeberPage.clickBeratungVereinbarenButton()

    // Step: fields
    arbeitgeberPage.clickFachbereichBox('Elektronik')
    arbeitgeberPage.clickFachbereichBox('Anlagenmechanik')

    // Step: jobs-to-fill
    arbeitgeberPage.clickPositionChip('3-5')

    // Step: hiring-location
    arbeitgeberPage.enterCity('Berlin')
    arbeitgeberPage.clickLocationWeiterButton()

    // Step: company-name
    arbeitgeberPage.enterUnternehmen('PowerUs')
    arbeitgeberPage.clickLastStepButton()

    // Step: contact-information
    arbeitgeberPage.enterFirstName('Max')
    arbeitgeberPage.enterLastName('Mustermann')
    arbeitgeberPage.enterEmail('max.mustermann@powerus.com')
    arbeitgeberPage.enterPhone('15143211257')

    // Submit form
    arbeitgeberPage.clickSubmitButton()
    cy.url().should('contain', '/arbeitgeber-anmeldung-erfolgreich')
    arbeitgeberPage.submitSuccessTitle.should('have.text', 'Super, vielen Dank!')
  })
})
