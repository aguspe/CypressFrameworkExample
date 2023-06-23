import LoginPage from '../pages/LoginPage';

describe('Login', () => {
    const loginPage = new LoginPage();

    it('User can login with right credentials', () => {
        cy.fixture('users.json').then((users) => {
            loginPage.visit();
            // @ts-ignore
            loginPage.login(users["Registered user"].username, users["Registered user"].password);
            loginPage.header().should('contain', 'Welcome back Agustin');
        });
    });

    it('User cannot login with wrong credentials', () => {
        cy.fixture('users.json').then((users) => {
            loginPage.visit();
            // @ts-ignore
            loginPage.login(users["Registered user"].username, 'wrongPassword');
            loginPage.errorMessage().should('contain', '\n' +
                'Error: Incorrect login or password provided.');
        });
    });
});
