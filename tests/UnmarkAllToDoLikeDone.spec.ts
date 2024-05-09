import test from "@playwright/test";
import { HomePage } from "../src/pageObject/pages/HomePage";
import { ListToDoPage } from "../src/pageObject/pages/ListToDoPage";
import {RegUserData} from "../src/helper/RegUserData";

test.describe('Auth', () => {
    let homePage: HomePage;
    let listToDoPage: ListToDoPage;

    const registeredEmail : string = RegUserData.regEmail;
    const registeredPassword : string = RegUserData.regPassword;

    test.beforeEach(async ({ page })=>{
        homePage = new HomePage(page);
        listToDoPage = new ListToDoPage(page);
    })

    test('shoud allow user to unmark like done a choosen ToDo', async ({}) => {
        await homePage.goToHomePage();
        await homePage.assertSiteIconIsVisible();

        await homePage.fillEmail(registeredEmail);
        await homePage.fillPassword(registeredPassword);
        await homePage.clickLoginUserButton();

        await listToDoPage.assertAvailableToDo();
        await listToDoPage.unmarkLikeDoneAllToDo();
    });
})
