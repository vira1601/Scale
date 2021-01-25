describe('Source Talent Tab', () => {
    it('User Visit New EMS', () => {
    cy.visit('http://devel.ekrut.com:8080/login')
    })

    it('User Inputs Email',() => {
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('melissa@ekrut.com')
    })

    it('User Inputs Password', () => {
        cy.get('.ant-input-password > .ant-input')
        .should('be.visible')
        .type('kazuchan')
    })

    it('User Clicks Login Button', () => {
        cy.get('.content__body > .ant-btn-primary')
        .should('be.visible')
        .click()
    })
    it('User Clicks Source Talent Tab', () => {
        cy.get('#tab-tab-source-talent')
        .should('be.visible')
        .click()
    })
})