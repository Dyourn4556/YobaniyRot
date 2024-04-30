import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { SignupPageLocators } from '../locators/SignupPageLocators';


export class SignupPage extends BasePage{

    async assertHeaderIsVisible(): Promise<void> {
        expect(this.page.locator(SignupPageLocators.pageHeaderXpath)).toBeVisible;
    }

    async fillFirstName(firstName: string): Promise<void> {
        await this.page.locator(SignupPageLocators.firstNameFieldXpath).fill(firstName);
    }

    async fillLastName(lastName: string): Promise<void> {
        await this.page.locator(SignupPageLocators.lastNameFieldXpath).fill(lastName);
    }

    async fillEmail(email: string): Promise<void> {
        await this.page.locator(SignupPageLocators.emailFieldXpath).fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.page.locator(SignupPageLocators.passwordFieldXpath).fill(password);
    }

    async confirmPassword(confirmPassword: string): Promise<void> {
        await this.page.locator(SignupPageLocators.confirmPasswordFieldXpath).fill(confirmPassword);
    }

    async pressSignupButton(): Promise<void> {
        await this.page.locator(SignupPageLocators.signupButtonXpath).click();
    }
}