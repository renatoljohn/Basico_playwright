import { test } from '@playwright/test'

//.skip para pular o teste
test.skip('Primeiro teste', async({page}) => {

});

//test.fail(); faz com que o teste seja marcad ocomo falha 
test('Segundo teste', async({page}) => {
    test.fail();
});

//Marca o teste para que ele seja reparado
test.fixme('Terceiro teste', async({page}) => {

});

//test.slow(); triplica o tempo de timeout do teste
test('Quarto teste', async({page}) => {
    test.slow();
});

//.only somente esse teste sera executado
test.only('Quinto teste', async({page}) => {

});

//.skip(condição para pular, comentario) pula o teste em condições determinada na função
test('Sexto teste', async({page}) => {
    test.skip(browserName === 'firefox', 'Coloca comentario aqui')
});

//--grep "@nomeDaTag" executa o teste com a tag na descrição
//--grep-invert "@nomeDaTag" evita que os testes com a tag sejam executados
test('Primeiro teste com tag @smoke', async({page}) => {

});

