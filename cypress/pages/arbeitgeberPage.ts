import { selectors } from "../support/selectors"

class ArbeitgeberPage {
    public clickBeratungVereinbarenButton() {
        cy.get(selectors.matButton).contains('Jetzt Beratung vereinbaren').click()
        cy.url().should('contain', 'mitarbeitersuche')
    }

    public clickFachbereichBox(area: string) {
        cy.get(selectors.matCard).contains(area).click()
    }

    public clickFunnelWeiterButton() {
        cy.get(selectors.funnelStep).find(selectors.matButton).contains('Weiter').click()
        cy.url().should('contain', 'step=jobs-to-fill')
    }

    public clickPositionChip(positions: string) {
        cy.get(selectors.chipText).contains(positions).click()
        cy.url().should('contain', 'step=hiring-location')
    }

    public enterCity(city: string) {
        cy.get(selectors.cityInput).type(city, { force: true })
    }

    public clickLocationWeiterButton() {
        cy.get(selectors.locationStep).find(selectors.matButton).contains('Weiter').click()
        cy.url().should('contain', 'step=company-name')
    }

    public enterUnternehmen(company: string) {
        cy.get(selectors.unternehmenInput).type(company, { force: true })
    }

    public clickLastStepButton() {
        cy.get(selectors.matButton).contains('Zum letzten Schritt').click()
        cy.url().should('contain', 'step=contact-information')
    }

    public enterFirstName(firstName: string) {
        cy.get(selectors.firstNameInput).type(firstName, { force: true })
    }

    public enterLastName(lastName: string) {
        cy.get(selectors.lastNameInput).type(lastName, { force: true })
    }

    // Enter email and waits for BE validation
    public enterEmail(email: string) {
        cy.get(selectors.emailInput).type(email, { force: true })
        cy.intercept('GET', '**/validate/email**').as('validateEmail')
        cy.wait('@validateEmail', { timeout: 10000 }).then((intercept) => {
            expect(intercept.response.body.isValid).to.be.true
        })
    }

    // Enter phone and waits for BE validation
    public enterPhone(phone: string) {
        cy.get(selectors.phoneInput).type(phone, { force: true }).blur()
        cy.intercept('GET', '**/validate/phone-number**').as('validatePhoneNumber')
        cy.wait('@validatePhoneNumber', { timeout: 10000 }).then((intercept) => {
            expect(intercept.response.body.isValid).to.be.true
        })
    }

    public clickSubmitButton() {
        cy.get(selectors.contactStep).find(selectors.matButton).contains('Kostenlos').click()
    }
}

export const arbeitgeberPage: ArbeitgeberPage = new ArbeitgeberPage()
