//test files are called 'SPEC File' in cypress termonilogy.
//Folowing MOCHA testng framework
/// <reference types="Cypress" />

describe('My First Testsuite',()=>{ //describe is the test suite first arg is description and second one is the function under which code will be eritten or test cases will be written.
    it('First Testcase',()=>{ //two arg, 1st one is description and 2nd one is function under which code will be written.
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');//visir method used to visit the path or page
        cy.get('.search-keyword').type('ca');//get method is like findelement in selenium,type is like sendkeys
        cy.wait(2000);//put wait before validating
        cy.get('.product:visible').should('have.length',4);//should is a assertion method, by using visible tag after classname it will ommit the invisible elenments.
        //parent child chaining
        cy.get('.products').as('productlocator');//this called alias where user optimizes the code by mentioning one resused classpath into a variable using as method and also for this type of assign method user dont have to manually handle any promises.

        cy.get('@productlocator').find('.product').should('have.length',4);//find limits the scope
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(()=>{
            console.log('sneha')//as this simply js command to make it sychronyze neet to manually tackle this.
        }); // this line will add whatever present in 2nd index of the product array and on that position if it gets anything like add to cart it will perform click action.
        //now remembering the problem statement next line will be dynamically selecting a specific product
        // using @ we can call the variable
        cy.get('@productlocator').find('.product').each(($el, index,$list)=>{ //each method is like foreach in js which will iterate through each method, el will start from first index position element
        const veggiename=$el.find('h4.product-name').text() //it will get text from the first position and iterate till length
        if(veggiename.includes('Carrot'))
        {
        $el.find('button').click();//wrap is a promise method
        }
        })
        cy.get('.brand').as('logotext');
        //method to assert
        cy.get('@logotext').should('have.text','GREENKART');//should belongs to chai assertion so that it will automatically be taken care even though this is not a cypress method.
        

        //method to print in logs
        cy.get('@logotext').then((logo)=>{ //like this user can declare the step under the variable and put action methods on the variable
            cy.log(logo.text())


        })//if user through step under the variable then have to handle the promis manually.
        //cy.log(logo.text())
    })

})
