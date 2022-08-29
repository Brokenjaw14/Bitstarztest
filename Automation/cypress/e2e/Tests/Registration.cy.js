/// <reference types="cypress" />

import {faker} from '@faker-js/faker';
const email =faker.internet.email();
const password =faker.internet.password();
const username =faker.internet.userName();


describe('Cy Visit', function() {
    it('test visit method', function() {
      cy.visit('https://test.bitstarz.com/')
      cy.get('[data-cy="signup_btn_header"]').click()
      cy.get('[data-cy="cy-signup-modal-email"]').type(`testingpurpose221+${timestamp}@gmail.com`)
      cy.get('[data-cy="cy-signup-modal-username"]').click().type(username)
      cy.get('[data-cy="cy-signup-modal-password"]').click().type(password)
      cy.get('[data-cy="cy-signup-modal-currency-dropdown"] > .bs-c-deposit__input').click()
      cy.get('.dropdown__menu > :nth-child(7)').click('center')
      cy.get('.checkbox__check').click()
      cy.get('.bs-c-button').click()
      


    })
  })

  
