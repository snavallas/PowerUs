describe('Arbeitgeber', () => {
  it('can submit a free consultation', () => {
    cy.intercept({ hostname: 'api.testing.powerus.de' }).as('getActivities')

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
    const buttonWeiter = cy.get('.mat-button-wrapper').contains('Weiter')
    buttonWeiter.click({ force: true })

    // Select Number of positions
    const chipThreeFive = cy.get('.chip-text').contains('3-5')
    chipThreeFive.click()

    // Enter City
    // const textBoxCity = cy.get('input[id="mat-input-8"]')
    // const textBoxCity = cy.get(`[id='mat-input-8']`)
    const textBoxCity = cy.get('.mat-input-8')
    textBoxCity.type('Berlin', { force: true })
  })
})