import {test, expect} from "@playwright/test"

test('Demonstração Login 1', async({page}) => {

    //Ir até a pagina
    await page.goto('https://demo.applitools.com/');
    
    //Preenche o usuario e a senha
    await page.locator('[placeholder="Enter your username"]').fill('Renato');
    await page.locator('[placeholder="Enter your password"]').fill('32244000');

    //Clica no login
    await page.waitForSelector('text=Sign in', { timeout: 5000});
    await page.locator('text=Sign in').click();

});

test('Demonstração Login 2', async({page}) => {
    await page.goto('https://demo.applitools.com/')

});