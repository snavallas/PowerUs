class HomePage {
    get menuButton() { return cy.get(`[aria-label='Menü öffnen']`) }
    get menuCloseButton() { return cy.get(`[aria-label='Menü schließen']`) }
    get furArbeitLink() { return cy.get('.mat-button-wrapper').contains('Für Arbeitgeber') }
    get furArbeitUrl() { return cy.url() }

    public openMenu() {
        this.menuButton.click()
    }

    public validateMenuIsOpen() {
        this.menuCloseButton.should('be.visible')
    }

    public clickFurArbeitLink() {
        this.furArbeitLink.click({ force: true }) // parent <div.desktop> has CSS property: display: none
    }

    public validateFurArbeitPage() {
        this.furArbeitUrl.should('contain', '/fuer-arbeitgeber')
    }

}
export const homePage: HomePage = new HomePage()
