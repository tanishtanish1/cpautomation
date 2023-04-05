class login
{
    setusername(username)
    {
cy.get("input[placeholder='Username']").type("Admim")

    }
    setpassword(password)
    {
    cy.get("input[placeholder='Password']").type("admin123")

    }
    clicksubmit()
    {
    cy.get("button[type='submit']").click()
    }
    verifylogin()
    {
    cy.title().should('eq','OrangeHRM')
    }

}
export default login;