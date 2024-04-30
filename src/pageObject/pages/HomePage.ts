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

    async goToLoginPage(): Promise<void> {
        await this.page.locator(HomePageLocators.loginButtonXpath).click();
    }

    async clickSignButton(): Promise<void> {
        await this.page.locator(HomePageLocators.signinButtonXpath).click();
    }

}