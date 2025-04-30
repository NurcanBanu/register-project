describe("Login Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173"); // veya senin dev portun
    });
  
    it("başarılı form gönderimi", () => {
      cy.get('[data-testid="email-input"]').type("test@example.com");
      cy.get('[data-testid="password-input"]').type("StrongPass1");
      cy.get('[data-testid="accept-checkbox"]').check();
      cy.get('[data-testid="submit-button"]').should("not.be.disabled").click();
      cy.get('[data-testid="success-message"]').should("exist");
    });
  
    it("yanlış email girildiğinde", () => {
      cy.get('[data-testid="email-input"]').type("invalidemail");
      cy.get('[data-testid="submit-button"]').should("be.disabled");
      cy.contains("Geçerli bir email giriniz.").should("exist");
    });
  
    it("email ve password yanlış girildiğinde", () => {
      cy.get('[data-testid="email-input"]').type("nope");
      cy.get('[data-testid="password-input"]').type("123");
      cy.get('[data-testid="submit-button"]').should("be.disabled");
      cy.contains("Geçerli bir email giriniz.").should("exist");
      cy.contains("Şifre en az 8 karakter").should("exist");
    });
  
    it("kurallar kabul edilmeden gönderim", () => {
      cy.get('[data-testid="email-input"]').type("test@example.com");
      cy.get('[data-testid="password-input"]').type("StrongPass1");
      cy.get('[data-testid="submit-button"]').should("be.disabled");
    });
  });