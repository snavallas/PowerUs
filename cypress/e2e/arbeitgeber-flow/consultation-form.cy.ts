describe('Arbeitgeber', () => {
  beforeEach(() => {
    cy.setCookie(
      "cookies_consent",
      JSON.stringify({ cookies_analytics: "granted", cookies_marketing: "granted" })
    )
  })

  it('can submit a free consultation', () => {
    cy.viewport('iphone-8')
    cy.visit('https://testing.powerus.de/')

    // Click hamburger icon
    cy.get(`[aria-label='Menü öffnen']`).click({ force: true })
    cy.get('mat-icon').contains('menu').click()

    // Click button Für Arbeitgeber
    const meinProfil = cy.get('.mat-button-wrapper').contains('Arbeitgeber')
    meinProfil.click()

    // Check that the title appears
    const titleElement = cy.get('h1').first()
    titleElement.should('include.text', "Bewerber")
  })
})