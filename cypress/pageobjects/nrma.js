class nrma  {
  getaquote       = ".c-link.c-link--button__primary--highlight" ;
  selectstate     = "#iag-quote-box-form-state-option-4" ;
  selectinsurance ="#iag-quote-box-form-category-option-2";
  selectpolicy    ="#iag-quote-box-form-product-option-1" ;
  btnclick        = "a[aria-label='Continue']";
 
  setgetaquote(getaquote)
  {
    cy.get(this.getaquote).click()
  }
  setselectstate(selectstate)
  {
    cy.get(this.selectstate).click({force: true})
  }
  setselectinsurance(insurance)
  {
    cy.get(this.selectinsurance).click({force: true})
  }
  setselectpolicy(policy)
  {
    cy.get(this.selectpolicy).click({force: true})
  }
 setbtnclick(click)
 {
    cy.get(this.btnclick).click()
 }

 validateAndgoToPage2()
 {

 }
 }
 export default nrma ;

