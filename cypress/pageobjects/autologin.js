class autologin
{
    txtusername ="#name"
    txtphoneno  ="#phone"
    txtemail    ="#email"
    txtpassword = "#password"
    txtaddress= "#address"
    txtbutton= "button[name='submit']"

    setusername(username)
    {
    cy.get(this.txtusername).type(username)
    }
    setphoneno(phoneno)
    {
    cy.get(this.txtphoneno).type(phoneno)

    }
    setemail(email)
    {
    cy.get(this.txtemail).type(email)
    }
    setpassword(password)
    {
    cy.get(this.txtpassword).type(password)
    }
    setaddress(address)
    {
    cy.get(this.txtaddress).type(address)
    }
    submitbtn(button)
    {
    cy.get(this.txtbutton)
    }

    }
    export default autologin;









/*cy.get("#name").type('tanish')
cy.get("#phone").type('0425159999')
cy.get("#email").type('tanish123@gamil.com')
cy.get("#password").type('tanish321')
cy.get("#address").type('tanish678')
cy.get("button[name='submit']").click()
*/