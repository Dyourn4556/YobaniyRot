import test from "@playwright/test";
import { HomePage } from "../src/pageObject/pages/HomePage";
import { SignupPage } from "../src/pageObject/pages/SignupPage";
import { getFakeEmail, getFakeFirstName, getFakeLastName, getFakePassword } from "../src/helper/FakeUserData";
import { ListToDoPage } from "../src/pageObject/pages/ListToDoPage";


test.describe('Auth', () => {
    let homePage: HomePage;
    let signupPage: SignupPage;
    let listToDoPage: ListToDoPage;

    const email = getFakeEmail();
    const password = getFakePassword();
    const lastName = getFakeLastName();
    const firstName = getFakeFirstName();

    test.beforeEach(async ({ page })=>{
        homePage = new HomePage(page);  
        signupPage = new SignupPage(page);
        listToDoPage = new ListToDoPage(page);
    })

    test('shoud allow user to login', async ({ page }) => {
        await homePage.goToHomePage();
        await homePage.assertSiteIconIsVisible();
        
        await homePage.clickSignButton();
        await signupPage.assertHeaderIsVisible();

        await signupPage.fillFirstName(firstName);
        await signupPage.fillLastName(lastName);
        await signupPage.fillEmail(email);
        await signupPage.fillPassword(password);
        await signupPage.confirmPassword(password);

        await signupPage.pressSignupButton();

        await listToDoPage.assertHeaderOfToDoListIsVisible();
      });

})
