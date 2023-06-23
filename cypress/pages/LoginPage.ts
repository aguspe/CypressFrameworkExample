class LoginPage {
    visit() {
        cy.visit('index.php?rt=account/login');
    }

    login(email, password) {
        cy.get('#loginFrm_loginname').type(email);
        cy.get('#loginFrm_password').type(password);
        cy.get('[title="Login"]').click();
    }

    header() {
        return cy.get('.menu_text');
    }

    errorMessage() {
        return cy.get('.alert-danger');
    }
}

export default LoginPage;
