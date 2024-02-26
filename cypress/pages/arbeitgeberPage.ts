class ArbeitgeberPage {
    get beratungVereinbarenButton() { return cy.get('.mat-button-wrapper').contains('Jetzt Beratung vereinbaren') }
    get elektronikBox() { return cy.get('.mat-card-content').contains('Elektronik') }
    get anlagenmechanikBox() { return cy.get('.mat-card-content').contains('Anlagenmechanik') }
    get funnelWeiterButton() { return cy.get('app-funnel-steps').find('.mat-button-wrapper').contains('Weiter') }
    get threePositionsChip() { return cy.get('.chip-text').contains('3-5') }
    get cityTextInput() { return cy.get('input[id="mat-input-1"]') }
    get locationWeiterButton() { return cy.get('app-hiring-location-step').find('.mat-button-wrapper').contains('Weiter') }
    get unternehmenTextInput() { return cy.get('input[id="mat-input-2"]') }
    get lastStepButton() { return cy.get('.mat-button-wrapper').contains('Zum letzten Schritt') }
    get firstNameInput() { return cy.get('input[id="mat-input-3"]') }
    get lastNameInput() { return cy.get('input[id="mat-input-4"]') }
    get emailInput() { return cy.get('input[id="mat-input-5"]') }
    get phoneInput() { return cy.get('input[id="mat-input-6"]') }
    get submitButton() { return cy.get('app-contact-information-step').find('.mat-button-wrapper').contains('Kostenlos') }

    public clickBeratungVereinbarenButton() {
        this.beratungVereinbarenButton.click()
    }

    public clickElektronikBox() {
        this.elektronikBox.click()
    }

    public clickAnlagenmechanikBox() {
        this.anlagenmechanikBox.click()
    }

    public clickFunnelWeiterButton() {
        this.funnelWeiterButton.click()
    }

    public clickThreePositionsChip() {
        this.threePositionsChip.click()
    }

    public enterCity(city: string) {
        this.cityTextInput.type(city, { force: true })
    }

    public clickLocationWeiterButton() {
        this.locationWeiterButton.click()
    }

    public enterUnternehmen(company: string) {
        this.unternehmenTextInput.type(company, { force: true })
    }

    public clickLastStepButton() {
        this.lastStepButton.click()
    }

    public enterFirstName(firstName: string) {
        this.firstNameInput.type(firstName, { force: true })
    }

    public enterLastName(lastName: string) {
        this.lastNameInput.type(lastName, { force: true })
    }

    public enterEmail(email: string) {
        this.emailInput.type(email, { force: true })
        cy.intercept('GET', '**/validate/email**').as('validateEmail')
        cy.wait('@validateEmail', { timeout: 10000 }).then((intercept) => {
            expect(intercept.response.body.isValid).to.be.true
        })
    }

    public enterPhone(phone: string) {
        this.phoneInput.type(phone, { force: true })
        this.phoneInput.blur()
        cy.intercept('GET', '**/validate/phone-number**').as('validatePhoneNumber')
        cy.wait('@validatePhoneNumber', { timeout: 10000 }).then((intercept) => {
            expect(intercept.response.body.isValid).to.be.true
        })
    }

    public clickSubmitButton() {
        this.submitButton.click()
    }
}
export const arbeitgeberPage: ArbeitgeberPage = new ArbeitgeberPage()
