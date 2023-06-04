import LoginPage from '../pages/LoginPage';

describe('Login', () => {
    const loginPage = new LoginPage();

    it('User can login', () => {
        cy.fixture('users.json').then((users) => {
            // @ts-ignore
            cy.login(users["Registered user"].username, users["Registered user"].password);
            loginPage.header().should('contain', 'Welcome back Agustin');
        });
    });
});
