Cypress.Commands.add('login', (username, password) => {

  cy.visit('https://automationteststore.com/index.php?rt=account/login')

  cy.get('#loginFrm_loginname').type(username)
  cy.get('#loginFrm_password').type(password)
  cy.get('button[title="Login"]').click()
  cy.get('countFrm_firstname').type(username)
  cy.get('countFrm_lastname').type(username)
  cy.get('countFrm_email').type(username)
  cy.get('countFrm_telephone').type(username)
  cy.get('button[title="Continue"]').click()
  cy.get('#PasswordFrm_current_password').type(password)
  cy.get('#PasswordFrm_password').type(password)
  cy.get('#PasswordFrm_confirm').type(password)
  cy.get('button[title="Continue"]').click()
  


  
})


