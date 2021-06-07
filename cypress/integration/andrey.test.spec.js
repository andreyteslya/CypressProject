/// <reference types="cypress" />
// it.only("By ID", ()=>{
//     cy.visit("https://next.privat24.ua/")
// });

//const { it } = require("mocha");

//it("By Tag", ()=>{
 //   cy.visit("https://facebook.com/")
 //   cy.get('[name="pass"]')
//});

//it.("By Tag", ()=>{
 //   cy.visit("https://facebook.com/")
//    cy.get('[data-testid="open-registration-form-button"][role="button"]')
//});

//it.("By Tag", ()=>{
//    cy.visit("https://facebook.com/")
 //   cy.contains('чоловік')
//});

it.only("By Compose", ()=>{
    cy.visit('/')
    cy.get('[name="secure-username"]').type('test_qa@beeble.com')
    cy.get('#signin_pass').type('Qwertyasdf123!')
    cy.get('#sigin_button').click()
    cy.get('#headerActionsCompose').click()
})

it("By Compose", ()=>{
  cy.visit('/')
  cy.get('[name="secure-username"]').type('test_qa@beeble.com')
  cy.get('#signin_pass').type('Qwertyasdf123!')
  cy.get('#sigin_button').click()
  cy.get('[class="nav-link flex-grow-1"][data-nst-folder-path="Sent"]').click()
  })