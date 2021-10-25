import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';

const EMAIL_ADDRESS = 's52@yopmail.com';
const USER_FIRST_NAME = 'Honey';
const USER_LAST_NAME = 'Reddy';
const PASSWORD = 'Demo1234!';
const ADDRESS = '3018 61st Ave N';
const CITY_NAME = 'Minneapolis';
const ZIP = '55429';
const MOBILE_NUMBER = '+1 7777777777';
const ALIAS_ADDRESS = 'Fort Berthold Beulah ND USA';

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url('http://automationpractice.com/');
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.signUp(EMAIL_ADDRESS, USER_FIRST_NAME, USER_LAST_NAME, PASSWORD, ADDRESS, CITY_NAME, ZIP, MOBILE_NUMBER, ALIAS_ADDRESS)
    await LoginPage.validationAfterLanding()
    await LoginPage.signOutAndSignIn(EMAIL_ADDRESS, PASSWORD)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await LoginPage.addItemToCartAndCheckOutToPayment()
}); 

