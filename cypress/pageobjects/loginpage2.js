class login
{
    txtusername="input[placeholder='Username']"
    txtpassword="input[placeholder='Password']"
    btnclick="button[type='submit']"
    
    setusername(username)
    {
cy.get(this.txtusername).type(username)

    }
    setpassword(password)
    {
    
cy.get(this.txtpassword).type(password)
    }
    clicksubmit()
    {
    cy.get(this.btnclick)
    }
    verifylogin()
    {
    cy.title().should('eq','OrangeHRM')
    }

}
export default login;