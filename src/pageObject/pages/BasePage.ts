import { Page } from "playwright";

export class BasePage {
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
