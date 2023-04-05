

describe("windowalert",()=>{
    /*it("alert window",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()
    cy.on('window:alert',(t)=>{
    expect(t).to.contains('I am a JS Alert')

    })// alert window closed automatically
    cy.get("#result")
   .should('have.text','You successfully clicked an alert')
   //conformation alert

})
it("alert ok ",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:conform',(t)=>{
    expect(t).to.contains('I am a JS Confirm')
.should('have.text','You clicked: Ok')
})
//prompt alert
it.only("checking prompt widow ",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win)=>{
    cy.stub(win,'prompt').returns('welcome')
    })
    cy.get("button[onclick='jsPrompt()']").click()
    cy.get("#result").should('have.text','You entered: welcome')
})*/
//authenticated alert
it.only("checking authenticating window ",()=>{
cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                           {
                                                              username:'admin',
                                                              password:'admin'
                                                           }
                                                          });
cy.get("div[class='example'] p").should('have.contain','Congratulations!')

})

})

