describe("first-test", () => {
  const homeUrl = "https://react-games.netlify.com/";
  // const homeUrl = "localhost:3000"
  it.skip("run snake", () => {
    cy.visit(homeUrl);
    cy.contains("React Games !");
    cy.contains("Snake").click()
    cy.contains("Score: 5");
    cy.url().should("include", "/snake");
    const cell = cy.get(".board-row:nth-child(1) div:nth-child(1)");
    console.log("X:", cell);
    // cell.should("have.attr", "background-color");
    // have.attr("background-color");
  })

  it("run gol", () => {
    cy.visit(homeUrl);
    cy.contains("Game of life").click()
    cy.url().should("include", "/gameoflife");
    cy.contains("Stop");
    const cell  = cy.get(".board-row:nth-child(1) div:nth-child(1)")
    cell.should("have.class", "board-field");
    cell.should("have.attr", "style", "background-color: rgb(246, 246, 246);");
    cell.click();    
    cell.should("have.attr", "style", "background-color: rgb(55, 94, 151);");
    cell.click();    
    // cy.contains("Start").click();
  })

})
