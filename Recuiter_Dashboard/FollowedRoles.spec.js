describe('Followed Roles Tab', () => {
     beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1300, 720)
      })
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
    it('User Clicks Followed Roles Tab', () => {
        cy.get('#tab-tab-followed-role')
        .should('be.visible')
        .click()
        
        .wait(1000)
    })
    it('User search by Talent name', () => {
        cy.get(':nth-child(1) > .eds-input-group > .ant-input')
        .scrollIntoView()
        .click()
        .type('20 fit')
        
        
    })
    it('User click Search button', () => {
        cy.get('.sc-fyjhYU > .ant-space > :nth-child(2)')
        .should('be.visible')
        .click()
        
    })
  
    // it('User Clicks Reset Search button', () => {
    //     cy.contains('Reset Search')
    //     .should('be.visible')
    //     .click()
    // })
})