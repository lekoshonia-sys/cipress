describe('login informaation', () => {
  it('logini', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
    

cy.get('#loginFrm_loginname').type('leko53')
cy.get('#loginFrm_password').type('nanikodadu12')
cy.get('button[title="Login"]').click()
cy.contains("My Account").should("be.visible")
 
it('adit/change', () => {
cy.visit ('https://automationteststore.com/index.php?rt=account/edit')
cy.get('#AccountFrm_firstname').clear().type('levcho')
cy.get('#AccountFrm_lastname').clear().type('mesxi')
cy.get('#AccountFrm_email').clear().type('zevsius53@gmail.com')
cy.get('#AccountFrm_telephone').clear().type('591454564')
cy.get('button[title="Continue"]').click()
cy.contains("Your account has been successfully updated.").should("be.visible")})
cy.visit('https://automationteststore.com/index.php?rt=account/password')
cy.get('#PasswordFrm_current_password').type('nanikodadu12')
cy.get('#PasswordFrm_password').type('bakara12')
cy.get('#PasswordFrm_confirm').type('bakara12')
cy.get('button[title="Continue"]').click()
cy.contains("Your password has been successfully updated.").should("be.visible")


})


})
 

 

 




    
  




 
