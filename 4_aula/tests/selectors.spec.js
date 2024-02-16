import { test, expect} from '@playwright/test'

test('Demonstração de seletores', async ({ page }) =>{
    await page.goto('https://www.saucedemo.com/');
    
    // Usando qualquer propriedade de objeto
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('Renato');
    await page.locator('[id="user-name"]').fill('Luana');

    //Usando um seletor Css
    await page.locator('#login-button').click();

    
    //Usando o XPath
    await page.locator('xpath=//input[@name="user-name"]').fill('teste');
    await page.locator('//input[@name="user-name"]').fill('teste234');

    //Usando texto
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click();
})