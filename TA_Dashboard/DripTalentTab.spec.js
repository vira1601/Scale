
describe('User Creates New Role', () => {
    
    // beforeEach(() => {
    //     // run these tests as if in a desktop
    //     // browser with a 720p monitor
    //     cy.viewport(1300, 1000)
    //   })
    
    it('User Visit Drip Talents Page', () => {
    cy.visit('http://devel.ekrut.com:8080/login')
    })

    it('User Inputs Email',() => {
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('aldo@ekrut.com')
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
        cy.wait(10000)
    })

})

const randomtext = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
const fullname = 'Auto ' + randomtext
const email = 'auto' +randomtext + '@' + randomtext + '.com'