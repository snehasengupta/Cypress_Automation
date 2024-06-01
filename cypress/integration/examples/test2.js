/// <reference types="Cypress" />

describe('My Second Testsuite',()=>{
    it('First Testcase',()=>{ 
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.brand').as('logotext');
        cy.get('@logotext').should('have.text','GREENKART');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productlocator');
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
 
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Carrot'))
            {
            cy.wrap($el.find('button')).click()
            }
            })
            cy.get('.cart-icon > img').click();
            cy.contains('PROCEED TO CHECKOUT').click();
            cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click();
            cy.get('select').select('India');
            cy.get('.chkAgree').check();
            cy.get('button').contains('Proceed').click();
            cy.get('[style="color:green;font-size:25px"]').as('OrderPlaced');
            cy.get('@OrderPlaced').then((textdone)=>{
                cy.log(textdone.text())
            })
           // cy.get('@OrderPlaced').should('have.text','Thank you, your order has been placed successfully You\'ll be redirected to Home page shortly!!');
        })

    })