describe('Log In', () => {
    it('displays error message when login fails', () => {
      // go directly to login path
      cy.visit('http://localhost:3000/sign-in');
      cy.get('input[id="email"]').type('test@email.com');
      cy.get('input[id="password"]').type('fail_password');
      cy.get('button[id="login-submit"]').click();
    });
    it('redirects unauthorized users', () => {
      // go to protected path
      cy.visit('http://localhost:3000/');
      // we should be redirected to login page
      cy.url().should('contains', 'http://localhost:3000/sign-in');
    });
  });