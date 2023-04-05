describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com.au/')
    cy.get("input[id='twotabsearchtextbox']").type("t-shirts")
    cy.get("input[id='nav-search-submit-button']").click()
    
  
  })
   /* it('passes', () => {
      cy.visit('https://www.facebook.com')
      cy.title().should('eq','facebook12345')

      


  })*/
})