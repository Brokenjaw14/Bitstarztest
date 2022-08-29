/// <reference types="cypress" />

describe('Cy Visit', function() {
    it('test visit method', function() {
      cy.visit('https://test.bitstarz.com/')
      cy.get('[data-cy="cy-email-input-field-header"]').type('testingpurpose221@gmail.com')
      cy.get('[data-cy="cy-password-input-filed-header"]').type('Test1234')
      cy.get('[data-cy="cy-login-btn-header"]').click()
      cy.get('[data-cy="cy-login-btn-header"]').should('not.exist')
    })
  });
