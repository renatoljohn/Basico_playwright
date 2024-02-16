import { test, expect, chromium } from '@playwright/test'

//Não precisa paçar o page no atibuto do async, vamos uniciar o navegador dentro do teste
test('Demonstração de slow motion e gravação de video', async() =>{

    //Aqui iniciamos o navegador
    //const browser = await chromium.launch();
    //Aqui depois de iniciar o contexto nós incluimos o slowMo dentro do contexto
    const browser = await chromium.launch({
        slowMo: 5000
    });

    //Aqui iniciamos um novo contexto
    //const context = await browser.newContext();
    //Aqui adicionamos as opções de gravação do video
    const context = await browser.newContext({
        //Aqui iniciamos o objeto recordVideo para colcoar as configuraç~eos do video gravado
        recordVideo: {
            //Aqui criamos/apontamos o diretorio onde queremos salvar as gravações
            dir: 'videos/',
            //Aqui criamso o objeto size onde podemos configurar a dimenção do vídeo
            size: {
                width: 800,
                height: 600
            }
        }

    });

    //Aqui criamos a pagina
    const page = await context.newPage();

    //Ir até a pagina
    await page.goto('https://demo.applitools.com/');
    
    //Preenche o usuario e a senha
    await page.locator('[placeholder="Enter your username"]').fill('Renato');
    await page.locator('[placeholder="Enter your password"]').fill('32244000');

    //Clica no login
    await page.waitForSelector('text=Sign in', { timeout: 5000});
    await page.locator('text=Sign in').click();

    //Aqui nós enceramos o contexto criado, sempre feche o contexto nessas configurações
    await context.close();

});
