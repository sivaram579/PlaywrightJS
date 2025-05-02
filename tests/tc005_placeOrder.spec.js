const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

test('User should be able to place order', async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page, testInfo);
    const homePage = new HomePage(page);
    
    await loginPage.navigate();
    await loginPage.login();
    await loginPage.verifyLoginSuccess();
    await homePage.validateBackpackItem();
    await homePage.addItemToCart();
    await homePage.openKartAndCheckout();
    await homePage.logout();
});