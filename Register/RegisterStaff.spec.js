describe('User Register', () => {
    it('User Visit New EMS', () => {
    cy.visit('http://devel.ekrut.com:8080/login')
    })

    it('User click Register Now button',() => {
        cy.get('.content__footer > :nth-child(2) > .ant-btn')
        .should('be.visible')
        .click()
    })

    
    it('User Input Valid Fullname', () => {
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type(fullname)
    })

    it('User Input Valid Email', () => {
        cy.get('.content__body > :nth-child(2) > .ant-input')
        .should('be.visible')
        .type(email)
    })

    it('User Input Valid Password', () => {
        cy.get(':nth-child(3) > .ant-input-password')
        .should('be.visible')
        .type('qwerty123')
    })
    it('User Input Valid Confirm Password', () => {
        cy.get(':nth-child(4) > .ant-input-password')
        .should('be.visible')
        .type('qwerty123')
    })
    it('User Input Valid Phone Number', () => {
        cy.get('#phone')
        .should('be.visible')
        .type('089308000822')
    })

    it('User Select Role', () => {
        cy.get('.eds-select__value-container')
        .should('be.visible')
        .type('Recruiter')
        cy.get('#react-select-2-option-0')
        .click()
    })

    it('User Click Register Button', () => {
        cy.get('.content__body > .ant-btn')
        .wait(1000)
        // .should('be.visible')
        .click()
    })

    //   it('User Click Done Button', () => {
    //     cy.get('.ant-btn')
    //     .should('be.visible')
    //     .click()
    // })

    it('User Click Resend Email Verification', () => {
        cy.get('.sc-cvbbAY > .ant-row > .ant-col > .Wrapper-sc-1vc1jue > .Content-sc-1dwei3l > .content__footer > :nth-child(2) > .ant-btn')
        .should('be.visible')
        .click()
    })

    it('Success message resend email verification appear ', () => {
        cy.get('.ant-notification-notice-with-icon')
        .should('be.visible')
        .click()
    })

    
    
})


const randomtext = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
const fullname = 'Auto ' + randomtext
const email = 'a'+randomtext + '@' + 'ekrut' + '.com'