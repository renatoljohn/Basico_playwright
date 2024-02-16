import {test, page, expect} from '@playwright/test'

test('Demonstração assertions', async ({page}) => {
    
    await page.goto('https://kitchen.applitools.com/');
    
    //Checar se um elemento está presente ou não
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    
    // Podemos usar o simbulo $ como uma condicional para verificar se um elemente exite ou não
    // Com isso podemos usalo em um if para executar uma ação caso o elemento esteja visivel
    if( await page.$('text=The Kitchen') ){
        await page.locator('text=The Kitchen').click
    }

    //Verifica se o elemento esta visivel na pagina ou não
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden();
    
    //Verifica se o elemento está habilitado ou não
    //.soft faz com que o expect mesmo falhando continue os outros testes
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    //Checa o texto da página
    //Essa verificação é case sensitive
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    await expect(page.locator('text=The Kitchen')).not.toHaveText('The kitchen');

    //Verifica o valor de um atributo
    // Ao usar /.*algo aqui/ verificamos se contem algum valor antes do 'algo aqui'
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/);    
    await expect(page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a');

    //Verifica o url de uma pagina
    await expect(page).toHaveURL('https://kitchen.applitools.com/')

    //Verifica o titulo da página
    await expect(page).toHaveTitle(/.*Kitchen/);

    //Verifica fazendo uma comparação entre capturas de tela
    await expect(page).toHaveScreenshot();

    
});