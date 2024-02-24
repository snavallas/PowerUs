describe('template spec', () => {
    it('Contains "Kitchen Sink"', () => {
    //   cy.viewport('iphone-8')
      cy.visit('https://testing.powerus.de/')
  
      
    //   cy.get(`[aria-label='Menü öffnen']`).click({force: true})

    //   const meinProfil = cy.get('.mat-button-wrapper').contains('Für Arbeitgeber')
    //   meinProfil.click({force: true})
      cy.get('.mat-button-wrapper').first().click()

      cy.contains('span[class="mat-button-wrapper"]', 'Für Arbeitgeber').click()
    //   meinProfil.should('include.text', 'Für Arbeitgeber')
      cy.get('.mat-button-wrapper').contains('Jetzt Beratung vereinbaren').click({force: true})
    //   const title = 'Kitchen Sink'
    //   const titleElement = cy.get('h1').first()
    //   titleElement.should('include.text', title)
    })
  })