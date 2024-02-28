import { selectors } from '../support/selectors'

class HomePage {

    // Navigate to PowerUs home page
    public visit() {
        cy.visit('')
        cy.wait(3000) // Needed as the page is unresponsibe to clicks
    }

    // Open Menu and validate it is opened
    public openMenu() {
        cy.get(selectors.menuButton).click()
        cy.get(selectors.menuCloseButton).should('be.visible')
    }

    // Navigate to Für Arbeit page
    public navigateToFurArbeitPage() {
        cy.get(selectors.matButton).contains('Für Arbeitgeber').click({ force: true })
        cy.url().should('contain', '/fuer-arbeitgeber')
    }
}

export const homePage: HomePage = new HomePage()
