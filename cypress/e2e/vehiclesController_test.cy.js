/// <reference types="cypress" />

context('Vehicle search', () => {
  it('Check status of vehicle search endpoint', () => {
    cy.request("GET", "http://localhost:3000/vehicle/3/2022-09-12 10:00:00+00").should((response) => {
        expect(response.status).to.equal(200);        
    });     
  });
  it('Check content of vehicle search endpoint selling', () => {
    cy.request("GET", "http://localhost:3000/vehicle/3/2022-09-12 10:00:00+00").should((response) => {
      const expectedResult = JSON.stringify({ id: 3, make: 'VW', model: 'GOLF', state: 'selling' });
      const actualResult =  JSON.stringify(response.body);
        expect(actualResult).to.equal(expectedResult);
    });        
  });
  it('Check content of vehicle search endpoint selling', () => {
    cy.request("GET", "http://localhost:3000/vehicle/3/2022-09-12 10:00:00+00").should((response) => {
      const expectedResult = JSON.stringify({ id: 3, make: 'VW', model: 'GOLF', state: 'sold' });
      const actualResult =  JSON.stringify(response.body);
        expect(actualResult).to.not.equal(expectedResult);
    });        
  });
  it('Check content of vehicle search endpoint sold', () => {
    cy.request("GET", "http://localhost:3000/vehicle/3/2022-10-12 10:00:00+00").should((response) => {
      const expectedResult = JSON.stringify({ id: 3, make: 'VW', model: 'GOLF', state: 'sold' });
      const actualResult =  JSON.stringify(response.body);
        expect(actualResult).to.equal(expectedResult);
    });        
  });
});
