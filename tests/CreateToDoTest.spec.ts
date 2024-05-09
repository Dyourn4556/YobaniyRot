import test from "@playwright/test";
import { HomePage } from "../src/pageObject/pages/HomePage";
import { ListToDoPage } from "../src/pageObject/pages/ListToDoPage";
import {RegUserData} from "../src/helper/RegUserData";
import { getFakeToDo } from "../src/helper/FakeUserData";

test.describe('Auth', () => {
    let homePage: HomePage;
    let listToDoPage: ListToDoPage;

    const registeredEmail : string = RegUserData.regEmail;
    const registeredPassword : string = RegUserData.regPassword;
    const newToDo : string = getFakeToDo();

    test.beforeEach(async ({ page })=>{
        homePage = new HomePage(page);
        listToDoPage = new ListToDoPage(page);
    })

    test('shoud allow user to create a new ToDo', async ({}) => {
        await homePage.goToHomePage();
        await homePage.assertSiteIconIsVisible();

        await homePage.fillEmail(registeredEmail);
        await homePage.fillPassword(registeredPassword);
        await homePage.clickLoginUserButton();

        await listToDoPage.assertHeaderOfToDoListIsVisible()
        await listToDoPage.clickAddNewToDoButton();
        await listToDoPage.assertHeaderOfCreateNewToDoModalIsVisible();
        await listToDoPage.typeNewToDo(newToDo);
        await listToDoPage.clickCreateToDoButton();
        await listToDoPage.assertCreatedToDo(newToDo);
    });
})
