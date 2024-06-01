/// <reference types="Cypress" />

describe('My Second Testsuite',()=>{
    it('First Testcase',()=>{ 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#checkBoxOption1").check();
    })

})