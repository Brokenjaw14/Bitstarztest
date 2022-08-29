/// <reference types="cypress" />

describe('Cy Visit', function() {
    it('test visit method', function() {
      cy.visit('https://test.bitstarz.com/')
      cy.get('[data-cy="cy-email-input-field-header"]').type('aaa@aa.aa')
      cy.get('[data-cy="cy-login-btn-header"]', {timeout:2000}).click()
    })
  });