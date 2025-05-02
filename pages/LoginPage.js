const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page, testInfo) {
        this.page = page;
        this.testInfo = testInfo;
        this.usernameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.openMenu = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async navigate() {
        await this.page.goto("/");
    }

    async login() {
        await this.usernameField.fill(this.testInfo.config.use.APP_USERNAME);
        await this.passwordField.fill(this.testInfo.config.use.APP_PASSWORD);
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL(`${this.testInfo.config.use.baseURL}/inventory.html`);
    }

    async logout() {
        await this.openMenu.click();
        await this.logoutLink.click();
        await this.page.close();
    }
}

module.exports = LoginPage;