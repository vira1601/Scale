describe('Approval List Tab', () => {
    it('User Visits Ekrut Platform', () => {
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
        .wait(1000)
    })

    it('User verify Recruiter Dashboard', () => {
        cy.get('.sc-cEvuZC > .ant-typography')
        cy.contains('Recruiter Dashboard')
    })

    it('User Click Next Tab to find Approval list tab',()=>{
        cy.get('.ant-tabs-tab-next')
        .scrollIntoView()
        .click()
        .wait(1000)
    })

    it('User Clicks Approval List Tab', () => {
        cy.get('#tab-tab-approval-list')
        .scrollIntoView()
        .click()
    })
    
    it('User search by Talent Name',() => {
        cy.get(':nth-child(1) > .eds-input-group > .ant-input')
        .type('test')
        cy.get(':nth-child(2) > .ant-btn')
        .click()
    })


})