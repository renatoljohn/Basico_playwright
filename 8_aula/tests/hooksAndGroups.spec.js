import { test, expect } from '@playwright/test'


test.describe('Todos os meus testes', () => {

    //Podemos adicionar o .beforeEach para que o teste seja executado antes de todos os testes do arquivo
    //Usando o .beforeEach não precisa de titulo
    test.beforeEach(async({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html');
    });

    //Podemos adicionar o .afterAll para que o teste seja executado depois de todos os testes do arquivo
    test.afterAll(async({ page }) => {
        await page.close();
    });

    test('homepage', async({ page }) => {

        // await page.goto('https://www.saucedemo.com/');
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.locator('[data-test="login-button"]').click();
        // await page.waitForURL('https://www.saucedemo.com/inventory.html');
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('#item_1_title_link').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        // await page.close();
    });



    test('logout', async({ page }) => {
        
        // await page.goto('https://www.saucedemo.com/');
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.locator('[data-test="login-button"]').click();
        // await page.waitForURL('https://www.saucedemo.com/inventory.html');
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.waitForURL('https://www.saucedemo.com/');
        // await page.close();
    });

});