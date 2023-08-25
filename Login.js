const readline = require("readline");
const puppeteer = require("puppeteer");
const delay = require ("./delayfunc");
const setProxy = require( "./setProxy");
const prompt = require('prompt-sync')();
const readUserPw = require('./readUserPw');
const { log } = require("console");




async function Login(page, user,password){

    //User input account info
    // let userNameInput = prompt('Please enter user-name : ');
    // let passWordInput = prompt('Please enter password : ');

    await delay(3000);
    //go to main page 
    await page.goto("https://thepremierstore.com/account/login");
    await delay(8000);

    //close ads for that website
    await page.click('.needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1');

    await page.type("#CustomerEmail", user);
    await page.type("#CustomerPassword", password);


    await delay(5000);
    await Promise.all([
        page.click("#customer_login button"),
        page.waitForNavigation()
    ]);

    await page.close();

}

module.exports = Login;