import { selectors } from '../support/selectors'

class ArbeitgeberPage {
    public get submitSuccessTitle() { return cy.get(selectors.successTitle) }

    // Click button to start consultation
    public clickBeratungVereinbarenButton() {
        cy.get(selectors.matButton).contains('Jetzt Beratung vereinbaren').click()
        cy.url().should('contain', 'mitarbeitersuche')
    }

    // Select a specialist area
    public clickFachbereichBox(area: string) {
        cy.get(selectors.matCard).contains(area).click()
    }

    // Click Next button to continue to step jobs to fill 
    public clickFunnelWeiterButton() {
        cy.get(selectors.funnelStep).find(selectors.matButton).contains('Weiter').click()
        cy.url().should('contain', 'step=jobs-to-fill')
    }

    // Click from a list of postions to fill
    public clickPositionChip(positions: string) {
        cy.get(selectors.chipText).contains(positions).click()
        cy.url().should('contain', 'step=hiring-location')
    }

    // Enter the city the user is looking for specialists
    public enterCity(city: string) {
        cy.get(selectors.cityInput).type(city)
    }

    // Click Next button to continue to step company name 
    public clickLocationWeiterButton() {
        cy.get(selectors.locationStep).find(selectors.matButton).contains('Weiter').click()
        cy.url().should('contain', 'step=company-name')
    }

    // Enter the name of the company
    public enterUnternehmen(company: string) {
        cy.get(selectors.unternehmenInput).type(company)
    }

    // Click Next button to continue to step contact information
    public clickLastStepButton() {
        cy.get(selectors.matButton).contains('Zum letzten Schritt').click()
        cy.url().should('contain', 'step=contact-information')
    }

    public enterFirstName(firstName: string) {
        cy.get(selectors.firstNameInput).type(firstName)
    }

    public enterLastName(lastName: string) {
        cy.get(selectors.lastNameInput).type(lastName)
    }

    // Enter email and wait for BE validation
    public enterEmail(email: string) {
        cy.get(selectors.emailInput).type(email)
        cy.intercept('GET', '**/validate/email**').as('validateEmail')
        cy.wait('@validateEmail', { timeout: 10000 }).then((intercept) => {
            expect(intercept.response.body.isValid).to.be.true
        })
    }

    // Enter phone and wait for BE validation
    public enterPhone(phone: string) {
        cy.get(selectors.phoneInput).type(phone)
        cy.intercept('GET', '**/validate/phone-number**').as('validatePhoneNumber')
        cy.wait('@validatePhoneNumber', { timeout: 10000 }).then((intercept) => {
            expect(intercept.response.body.isValid).to.be.true
        })
    }

    // Click Get Free Advice button to submit the form 
    public clickSubmitButton() {
        cy.get(selectors.contactStep).find(selectors.matButton).contains('Kostenlos').click()
    }
}

export const arbeitgeberPage: ArbeitgeberPage = new ArbeitgeberPage()
