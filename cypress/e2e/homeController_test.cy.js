/// <reference types="cypress" />

context('Home page', () => {
  it('Check status of home page of endpoint', () => {
    cy.request("GET", "http://localhost:3000/").should((response) => {
        expect(response.status).to.equal(200);        
    });        
  });
  it('Check content of home page of endpoint', () => {    
    cy.request("GET", "http://localhost:3000/").should((response) => {
        expect(response.body).to.equal("Motorway Takehome Backend");
    });        
  });
});
