describe('Arbeitgeber', () => {
  it('can submit a free consultation', () => {
    // cy.intercept({ hostname: 'api.testing.powerus.de' }).as('getActivities')

    cy.viewport('iphone-8')
    cy.visit('https://testing.powerus.de/')

    cy.wait(3000) // Needed, as the page in unresponsibe to clicks


    // Click hamburger icon
    cy.get(`[aria-label='Menü öffnen']`).click()
    cy.get(`[aria-label='Menü schließen']`).should('be.visible')

    // Click button Für Arbeitgeber
    const meinProfil = cy.get('.mat-button-wrapper').contains('Für Arbeitgeber')
    meinProfil.click({ force: true }) // parent <div.desktop> has CSS property: display: none

    // Check that the title appears
    const titleElement = cy.get('h1').first()
    titleElement.should('include.text', "Bewerber")

    // Click Jetzt button
    const secondButton = cy.get('.mat-button-wrapper').contains('Jetzt Beratung vereinbaren')
    secondButton.click({ force: true })

    // Select two job areas
    const boxElektronik = cy.get('.mat-card-content').contains('Elektronik')
    boxElektronik.click()
    const boxAnlagenmechanik = cy.get('.mat-card-content').contains('Anlagenmechanik')
    boxAnlagenmechanik.click()

    // Click Weiter button
    // const buttonWeiter = cy.get('.mat-button-wrapper').contains('Weiter')
    const buttonWeiter = cy.get('app-funnel-steps').find('.mat-button-wrapper').contains('Weiter')
    buttonWeiter.click({ force: true })

    // Select Number of positions
    const chipThreeFive = cy.get('.chip-text').contains('3-5')
    chipThreeFive.click()

    // Enter City
    const textBoxCity = cy.get('input[id="mat-input-1"]')
    textBoxCity.type('Berlin', { force: true })

    // Click Weiter button
    // const buttonWeiter2 = cy.get('.mat-button-wrapper').contains('Weiter')
    const buttonWeiter2 = cy.get('app-hiring-location-step').find('.mat-button-wrapper').contains('Weiter')
    buttonWeiter2.click({ force: true })

    // Enter Unternehmen
    const textBoxUnternehmen = cy.get('input[id="mat-input-2"]')
    textBoxUnternehmen.type('PowerUs', { force: true })

    // Click Zum letzten Schritt button
    const buttonNext = cy.get('.mat-button-wrapper').contains('Zum letzten Schritt')
    buttonNext.click({ force: true })

    // Enter Contact information
    const textBoxFirstName = cy.get('input[id="mat-input-3"]')
    textBoxFirstName.type('Max', { force: true })
    const textBoxLastName = cy.get('input[id="mat-input-4"]')
    textBoxLastName.type('Mustermann', { force: true })
    const textBoxEmail = cy.get('input[id="mat-input-5"]')
    textBoxEmail.type('max.mustermann@powerus.com', { force: true })
    const textBoxPhone = cy.get('input[id="mat-input-6"]')
    textBoxPhone.type('15143211257', { force: true })
    textBoxPhone.blur()

    // Wait until email and phone number are validated
    cy.intercept('GET', '**/validate/email**').as('validateEmail')
    cy.wait('@validateEmail').then((intercept) => {
      expect(intercept.response.body.isValid).to.be.true
    })
    cy.intercept('GET', '**/validate/phone-number**').as('validatePhoneNumber')
    cy.wait('@validatePhoneNumber').then((intercept) => {
      expect(intercept.response.body.isValid).to.be.true
    })
    
    // Click Kostenlos beraten lassen button
    const buttonSubmit = cy.get('app-contact-information-step').find('.mat-button-wrapper').contains('Kostenlos')
    buttonSubmit.click({ force: true })

    const firstTitle = cy.get('h1').first()
    firstTitle.should('include.text', 'Super')
  })
})