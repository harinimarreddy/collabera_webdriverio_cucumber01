const ACCOUNT_HOLDER_NAME = 'Honey Reddy'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

    get signIn() { return $('.header_user_info') }

    get createAnAccountEmailAddress() {
        return $('[name="email_create"]')
    }

    get createAnAccount() {
        return $('.icon-user.left')
    } 

    get customerFirstName() {
        return $('#customer_firstname')
    } 

    get customerLastName() {
        return $('#customer_lastname')
    } 

    get password() {
        return $('#passwd')
    } 

    get address1() { 
    return $('#address1')
    }

    get city() { 
        return $('#city')
    }

    get stateDropDown() { 
        return $('#id_state')
    }

    state() { 
        return $$('option[value="23"]')[1]
    }

    get zipCode() { 
        return $('#postcode')
    } 

    get country() { 
        return $('#id_country')
    } 

    get mobilePhone() { 
        return $('#phone_mobile')
    } 

    get addressAlias() { 
        return $('#alias')
    }

    get submitButton() { 
        return $('#submitAccount')
    }

    headerInfo(index) {
        return $$('.header_user_info')[index]
    }

    get signInEmail() {
        return $('#email');
    }

    get createAccountForm() {
        return $('#create-account_form')
    } 

    get loginForm() {
        return $('#login_form')
    } 

    get submitLogin() {
        return $('#SubmitLogin')
    }

    button(index) {
        return $$('.btn')[index]
    }

    addToCart(index) {
        return $$('[title="Add to cart"]')[index];
    }

    get checkBox() {
        return $('#cgv');
    }

    centrePage(index) {
        return $$('#center_column')[index]
    }

    itemImages(index) {
        return $$('.product-image-container')[index]
    }

    get cart() {
        return $('div.shopping_cart')
    }


    async signUp(emailAddress, userFirstName, userLastName, pwd, address, cityName, zip, mobileNumber, aliasAddress) {
        await this.signIn.waitForDisplayed();
        await this.signIn.click();
        // await this.createAnAccountEmailAddress.waitForExist({ timeout: 100000 });
        await this.createAnAccountEmailAddress.setValue(emailAddress);
        await this.createAnAccount.click();
        await this.customerFirstName.setValue(userFirstName); 
        await this.customerLastName.setValue(userLastName); 
        await this.password.setValue(pwd); 
        await this.address1.setValue(address); 
        await this.city.setValue(cityName); 
        await this.stateDropDown.click(); 
        await this.state().click(); 
        await this.zipCode.setValue(zip); 
        await this.mobilePhone.setValue(mobileNumber); 
        await this.addressAlias.setValue(aliasAddress); 
        await this.submitButton.click(); 
    }

    async validationAfterLanding(){
        await expect(this.headerInfo(0)).toHaveTextContaining(ACCOUNT_HOLDER_NAME)
    }

    async signOutAndSignIn(signInEmail, pwd) {
        await this.headerInfo(1).waitForDisplayed();
        await this.headerInfo(1).click();
        await this.signIn.waitForDisplayed();
        await this.signIn.click();
        await this.loginForm.scrollIntoView();
        await this.signInEmail.waitForDisplayed();
        await this.signInEmail.setValue(signInEmail);
        await this.password.waitForDisplayed();
        await this.password.setValue(pwd);
        await this.submitLogin.click();
    }

    async addItemToCartAndCheckOutToPayment() {
        await this.button(4).scrollIntoView();
        await this.button(4).click();
        await this.centrePage(0).scrollIntoView();
        await this.addToCart(1).waitForExist({ timeout: 5000 });
        await this.itemImages(2).moveTo();
        await this.addToCart(1).moveTo();
        await this.addToCart(1).click();
        await this.button(3).waitForExist({ timeout: 2000 });
        await this.button(3).click();
        await this.cart.waitForExist({ timeout: 4000 });
        // await $('div.shopping_cart').click();
        await this.cart.moveTo();
        await this.button(1).waitForExist({ timeout: 2000 });
        await this.button(1).click();
        await this.button(6).scrollIntoView();
        await this.button(6).waitForExist({ timeout: 3000 });
        await this.button(6).click();
        await this.button(9).click();
        await this.checkBox.click();
        await this.button(5).click();
    }
}

export default new LoginPage();
