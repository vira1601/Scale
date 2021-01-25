
describe('User as BD', () => {
    
    // beforeEach(() => {
    //     // run these tests as if in a desktop
    //     // browser with a 720p monitor
    //     cy.viewport(1300, 1000)
    //   })
    
    it('User Visits BD Dashboard Page', () => {
    cy.visit('http://devel.ekrut.com:8080/login')
    })

    it('User Inputs Email',() => {
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('angel@ekrut.com')
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

    it('User Checks Cekam URL', () => {
        cy.url()
        .should('eq','http://devel.ekrut.com:8080/cekam')
    })

    it('User Click Leads Tab',()=>{
        cy.get('#tab-tab-my-leads')
        .scrollIntoView()
        .click()
    })


})

const randomtext = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
const fullname = 'Auto ' + randomtext
const email = 'auto' +randomtext + '@' + randomtext + '.com'