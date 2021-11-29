/// <reference types="cypress" />

let path = 'cypress/fixtures/'
let file = 'example.zip'

describe('example unzip', () => {
   it('make the test', () => {
    cy.task('unzipping', { path, file })
  })
})
