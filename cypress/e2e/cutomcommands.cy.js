describe("custom commands",()=>{
it("handling links",()=>{
cy.visit("https://demo.nopcommerce.com/")
//cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
//using custom commands
cy.clicklink('Apple MacBook Pro 13-inch')
cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

})

it.only("Login command",()=>{
    cy.visit("https://demo.nopcommerce.com/")
    cy.clicklink("Log in")//custom command
    
    cy.loginapp("cypresstesting2023@gmail.com","G7qs7hw@XWCnv")//custom command
    cy.get(".ico-account").should('have.text','My account')//custom command


})
})