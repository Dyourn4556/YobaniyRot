import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { HomePageLocators } from '../locators/HomePageLocators';
import { BaseUrl } from '../../resources/BaseUrl';


export class HomePage extends BasePage{

    async goToHomePage(): Promise<void> {
        await this.page.goto(BaseUrl.QACartUrl);
    }

    async clickHomeButton(): Promise<void> {
        await this.page.locator(HomePageLocators.homeButtonXpath).click();
    }

    async assertSiteIconIsVisible(): Promise<void> {
        expect(this.page.locator(HomePageLocators.qaCartImageXpath)).toBeVisible;
    }

    async clickLoginButton(): Promise<void> {
        await this.page.locator(HomePageLocators.loginButtonXpath).click();
    }

    async clickSignButton(): Promise<void> {
        await this.page.locator(HomePageLocators.signinButtonXpath).click();
    }

    async fillEmail(email: string): Promise<void> {
        await this.page.locator(HomePageLocators.emailFieldXpath).fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.page.locator(HomePageLocators.passwordFieldXpath).fill(password);
    }

    async clickLoginUserButton(): Promise<void> {
        await this.page.locator(HomePageLocators.loginUserButtonXpath).click();
    }

    async clickCreateNewAccount(): Promise<void> {
        await this.page.locator(HomePageLocators.createNewAccountButtonXpath).click();
    }
}