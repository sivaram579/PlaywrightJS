const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
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
        await this.usernameField.fill('standard_user');
        await this.passwordField.fill('secret_sauce');
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }

    async logout() {
        await this.openMenu.click();
        await this.logoutLink.click();
        await this.page.close();
    }
}

module.exports = LoginPage;