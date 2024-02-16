//Requerimento para usar as funções test e expect
const {test, expect} = require('@playwright/test');

test('Meu primeiro teste', async ( {page} ) =>{
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

});