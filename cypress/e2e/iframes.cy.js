import 'cypress-iframe'
describe("validatingframes",()=>{
it("approach 1",()=>{
cy.visit("https://the-internet.herokuapp.com/iframe")
      let iframe  =cy.get("#mce_0_ifr")
      .its('0.contentDocument.body')
      .should("be.visible")
      .then('cy.wrap')

iframe.clear().type("Your content goes here {ctrl+a}")
cy.get("[aria-label='Bold']").click()
  })
  //approach-2 // custom commands
it("approach 2",()=>{
    cy.visit("https://the-internet.herokuapp.com/iframe")
    cy.getIframe("#mce_0_ifr").clear().type("Your content goes here {ctrl+a}")
    cy.get("[aria-label='Bold']").click()

    
})
it.only("approach 3",()=>{
  cy.visit("https://the-internet.herokuapp.com/iframe")
cy.frameLoaded('#mce_0_ifr')// loaded frame
cy.iframe('#mce_0_ifr').clear().type("welcome {ctrl+a}")
cy.get("[aria-label='Bold']").click()
})
})