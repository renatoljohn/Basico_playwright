import { test, expect } from '@playwright/test'


test('Teste GET request', async({ request }) => {

    //Criando uma variavel para iniciar o request desejado
    //No exemplo abaixo um GET
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);

    //Criando uma variavel para pegar o texto da resposta e verificar se ele vem corretamente
    const text = await response.text();
    expect(text).toContain('Janet');

    //Printar o Json do request no console
    console.log(await response.json());
});


test('Teste POST request', async({ request }) => {
    
    //Criando uma variavel para fazer o post passando o body
    //No exempl oabaito é um POST
    const response = await request.post('https://reqres.in/api/users', {
        data: {
                "name": "morpheus",
                "job": "leader"
            }
    });
    expect(response.status()).toBe(201);


     //Criando uma variavel para pegar o texto da resposta e verificar se ele vem corretamente
     const text = await response.text();
     expect(text).toContain('morpheus');
 
     //Printar o Json do request no console
     console.log(await response.json());

});


test('Test PUT request', async({ request }) => {

    //Criando uma variavel para fazer o put passando o body
    //No exempl oabaito é um PUT
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    });
    expect(response.status()).toBe(200);

     //Criando uma variavel para pegar o texto da resposta e verificar se ele vem corretamente
     const text = await response.text();
     expect(text).toContain('zion resident');
 
     //Printar o Json do request no console
     console.log(await response.json());

});


test('Teste DELETE request', async({ request }) => {

    //Criando uma variavel para iniciar o request desejado
    //No exemplo abaixo um DELETE
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);

}); 