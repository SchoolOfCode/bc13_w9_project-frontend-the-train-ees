//import { cy } from 'cypress';

import CreatePage from "../../src/components/createPage";

describe("Check Default card", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get(".cardHeader>h1").contains("first name last name");
    cy.get(".cardHeader>p").contains("profession");
    cy.get(".linkedin>h2").contains("linkedin username");
    cy.get(".github>h2").contains("github handle");
    cy.get(".phone>h2").contains("phone number");
    cy.get(".email>h2").contains("email address");
    cy.get(".profilePicture > img").should(
      "have.attr",
      "src",
      `data:image/png;base64,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`
    );
  });
});

describe("Check search input", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get('.searchInput>input').type('ben{enter}');
    cy.get(".cardHeader>h1").contains("Ben Lloyd");
    cy.get(".cardHeader>p").contains("Full Stack Engineer");
    cy.get(".linkedin>h2").contains("benll6yd");
    cy.get(".github>h2").contains("conwys");
    cy.get(".phone>h2").contains("+44 7000 0000");
    cy.get(".email>h2").contains("ben@ben.com");
    cy.get(".profilePicture > img").should(
      "have.attr",
      "src",
      `https://media-exp1.licdn.com/dms/image/D4E03AQGAm-_-96TjdQ/profile-displayphoto-shrink_200_200/0/1669112547798?e=1674691200&v=beta&t=VCofBoCgez1pWbi1LbA9N_C7w_7RHUN0cx53NEGiEQI`    );
  });
});

describe("Check new card inputs", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get('.createBtn>button').contains('+ New Card').click();
    cy.get('.discoverTitle>h1').contains('Create Cards');
  })
})