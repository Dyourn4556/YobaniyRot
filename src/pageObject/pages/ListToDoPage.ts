import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ListToDoPageLocators } from '../locators/ListToDoPageLocators';


export class ListToDoPage extends BasePage{

    async assertHeaderOfToDoListIsVisible(): Promise<void> {
        expect(this.page.locator(ListToDoPageLocators.listToDoPageHeaderXpath)).toBeVisible;
    }

    async clickLogoutButton(): Promise<void> {
        await this.page.locator(ListToDoPageLocators.logoutButtonXpath).click();
    }

    async clickAddNewToDoButton(): Promise<void> {
        await this.page.locator(ListToDoPageLocators.addNewToDoButtonXpath).nth(0).click();
    }

    async markLikeDoneToDo(number: number): Promise<void> {
        await this.page.locator(ListToDoPageLocators.unmarkedLikeDoneToDoCheckBoxXpath).nth(Number(number)).click();
    }

    async unmarkLikeDoneToDoButton(number: number): Promise<void> {
        await this.page.locator(ListToDoPageLocators.markedLikeDoneToDoCheckBoxXpath).nth(Number(number)).click();
    }

    async clickDeleteToDoButtonByIndex(number: number): Promise<void> {
        await this.page.locator(ListToDoPageLocators.deleteToDoButtonXpath).nth(Number(number)).click();
    }

    async assertCreatedToDo(toDo: string): Promise<void> {
        await expect(this.page.locator(`text=${toDo}`)).toBeVisible();
    }

    async assertNoAvailableToDoMessageIsVisible(): Promise<void> {
        expect(this.page.locator(ListToDoPageLocators.noAvailableToDo)).toBeVisible;
    }

    async assertAvailableToDo(): Promise<void> {
        const listOfToDo = this.page.locator(ListToDoPageLocators.availableToDoXpath).last();
        await listOfToDo.waitFor({ state: 'visible' });
        const count = await listOfToDo.count();
        // if (count === 0) {
        //     console.log("Немає доступних елементів ToDo на сторінці");
        // } else {
        //     console.log("Знайдено елементи ToDo на сторінці:", count);
        // }
    }


    /*Create new ToDo Modal*/

    async assertHeaderOfCreateNewToDoModalIsVisible(): Promise<void> {
        expect(this.page.locator(ListToDoPageLocators.createNewToDoModalHeaderXpath)).toBeVisible;
    }

    async typeNewToDo(newToDo: string): Promise<void> {
        await this.page.locator(ListToDoPageLocators.createNewToDoFieldXpath).fill(newToDo);
    }

    async clickCreateToDoButton(): Promise<void> {
        await this.page.locator(ListToDoPageLocators.createNewToDoButtonXpath).click();
    }

    async goBackToListOfToDo(): Promise<void> {
        await this.page.locator(ListToDoPageLocators.goBackToToDoListButtonXpath).click();
    }

    async deleteAllToDo(): Promise<void> {
        const deleteButtons = this.page.locator(ListToDoPageLocators.deleteToDoButtonXpath);
        const elements = await deleteButtons.elementHandles();
        for (const element of elements) {
            await element.click();
        }
    }

    async markLikeDoneAllToDo(): Promise<void> {
        const LocatorsMarkToDoCheckBoxes = this.page.locator(ListToDoPageLocators.unmarkedLikeDoneToDoCheckBoxXpath);
        const markToDoCheckBoxes = await LocatorsMarkToDoCheckBoxes.elementHandles();
        for (const markToDoCheckBox of markToDoCheckBoxes) {
            await markToDoCheckBox.click();
        }
    }

    async unmarkLikeDoneAllToDo(): Promise<void> {
        const LocatorsMarkToDoCheckBoxes = this.page.locator(ListToDoPageLocators.markedLikeDoneToDoCheckBoxXpath);
        const markToDoCheckBoxes = await LocatorsMarkToDoCheckBoxes.elementHandles();
        for (const markToDoCheckBox of markToDoCheckBoxes) {
            await markToDoCheckBox.click();
        }
    }
}