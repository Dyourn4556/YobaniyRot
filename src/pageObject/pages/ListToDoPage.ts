import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ListToDoPageLocators } from '../locators/ListToDoPageLocators';


export class ListToDoPage extends BasePage{

    async assertHeaderOfToDoListIsVisible(): Promise<void> {
        expect(this.page.locator(ListToDoPageLocators.listToDoPageHeaderXpath)).toBeVisible;
    }

}