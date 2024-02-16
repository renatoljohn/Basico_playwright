exports.LoginPage = class LoginPage{
    
    //Criamos o construtor para criar as variaveis que vamos trabalhar nessa classe
    constructor(page) {

        this.page = page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button  =page.getByRole('button', { name: ' Login' });
    };
    
    async gotoLoginPage(page) {
        await this.page.goto(page);
    };


    async login(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    };
};