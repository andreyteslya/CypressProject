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

it("By Compose", ()=>{
    cy.visit('https://pre.beeble.com/')
    cy.get('[name="secure-username"]').type('test_qa@beeble.com')
    cy.get('#signin_pass').type('Qwertyasdf123!')
    cy.get('#sigin_button').click()
    cy.get('#headerActionsCompose').click()
})
