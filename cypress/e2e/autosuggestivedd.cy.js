

describe("autosuggestive",()=>{
it.only("firstdropdown",()=>{
cy.visit("https://www.google.com/")
cy.get("[name='q']").type('jira soft').click().type('{enter}')
cy.get(".pcTkSc ").find('div span').contains('jira software')

})
it("wikkipedia dropdown",()=>{
cy.visit("https://www.wikipedia.org/")
cy.get("#searchInput").type('aust').click()
cy.get("a[href='https://en.wikipedia.org/wiki/Australia']").click()

})
})