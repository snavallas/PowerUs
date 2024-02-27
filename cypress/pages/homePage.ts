import { selectors } from '../support/selectors'

class HomePage {
    // Open Menu and validate it is opened
    public openMenu() {
        cy.get(selectors.menuButton).click()
        cy.get(selectors.menuCloseButton).should('be.visible')
    }
    
    // Navigate to Für Arbeit page
    public navigateToFurArbeitPage() {
        cy.get(selectors.matButton).contains('Für Arbeitgeber').click({ force: true }) 
        // .click({ force: true }): parent <div.desktop> has CSS property: display: none
        cy.url().should('contain', '/fuer-arbeitgeber')
    }
}

export const homePage: HomePage = new HomePage()
