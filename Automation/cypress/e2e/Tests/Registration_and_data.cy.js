/// <reference types="cypress" />

import {faker} from '@faker-js/faker';
const password =faker.internet.password();
const username =faker.internet.userName();
const timestamp = new Date().getTime(); //1642080371822
const firstname =faker.name.firstName();
const lastname =faker.name.lastName();
const phone =faker.phone.phoneNumber();
const city =faker.address.cityName();
const postal =faker.address.countryCode();
const address =faker.address.streetName();



describe('Cy Visit', function() {
    it('test visit method', function() {
      cy.visit('https://test.bitstarz.com/')
      cy.get('[data-cy="signup_btn_header"]').click()
      cy.get('[data-cy="cy-signup-modal-email"]').type(`testeroftests1+${timestamp}@gmail.com`)
      cy.get('[data-cy="cy-signup-modal-username"]').click().type(username)
      cy.get('[data-cy="cy-signup-modal-password"]').click().type(password)
      cy.get('[data-cy="cy-signup-modal-currency-dropdown"] > .bs-c-deposit__input').click()
      cy.get('.dropdown__menu > :nth-child(7)').click('center')
      cy.get('.checkbox__check').click()
      cy.get('.bs-c-button').click()
      cy.get('.newsletter-link').click()
      cy.get('.action').click()
      cy.get('[data-cy="cy-close-modal-btn"] > .c-modal-overlay-close__icon > use').click()
      cy.get('[data-cy="cy-skip-button"]').click()
      cy.get('[data-cy="cy-shared-continue-button"]').click()
      cy.get(':nth-child(1) > .navbar__nav-link').trigger('mouseover')
      cy.get('a').contains('My Account').click()
      cy.get('.bs-c-account-menu-list > :nth-child(4)').click()
      cy.get('#first_name').type(firstname)
      cy.get('#last_name').type(lastname)
      cy.get('.vdp-datepicker > :nth-child(1) > input')
        .contains('1').click()
          .contains('F').click()
            .contains('16').click()
      cy.get('.bs-u-position--relative > label > .bs-c-deposit__input').type(phone)
      cy.get('#city').type(city)
      cy.get('#postal_code').type(postal)
      cy.get('#address').type(address)
      cy.get('.bs-c-account-profile-info__form > .bs-c-button-wrapper > .bs-c-button').click()
      



      
      
      


    })
  })

  