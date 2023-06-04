class LoginPage {
    visit() {
        cy.visit('index.php?rt=account/login');
    }

    login(email, password) {
        cy.get('#loginFrm_loginname').type(email);
        cy.get('#loginFrm_loginname').type(password);
        cy.get('[title="login"]').click();
    }

    header() {
        return cy.get('.menu_text');
    }
}

export default LoginPage;
