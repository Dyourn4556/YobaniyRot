export class ListToDoPageLocators {
  static readonly listToDoPageHeaderXpath = "//h2[@data-testid='welcome']";
  static readonly logoutButtonXpath = "//span[@class='MuiButton-label']";
  static readonly addNewToDoButtonXpath =
    "//span[@class='MuiIconButton-label']";

  static readonly markedLikeDoneToDoCheckBoxXpath =
    "//div[@class='sc-breuTD fkEinw'] //span[@aria-disabled='false'] //span[@class='MuiIconButton-label']";

  static readonly unmarkedLikeDoneToDoCheckBoxXpath =
    "//div[@class='sc-breuTD dIVhJd'] //span[@aria-disabled='false'] //span[@class='MuiIconButton-label']";

  static readonly deleteToDoButtonXpath =
    "//button[contains(@class, 'MuiButtonBase-root') and contains(@data-testid, 'delete')] //span[contains(@class, 'MuiIconButton-label')]";

  static readonly availableToDoXpath = "//div[@data-testid='todo-item']";
  static readonly noAvailableToDo = '//h4[@data-testid="no-todos"]';

  /*Create new  ToDo Modal*/
  static readonly createNewToDoModalHeaderXpath =
    "//h2[@data-testid='sub-header']";
  static readonly createNewToDoFieldXpath =
    "//input[@class='MuiInputBase-input MuiOutlinedInput-input']";
  static readonly createNewToDoButtonXpath =
    "//button[@data-testid='submit-newTask']";
  static readonly goBackToToDoListButtonXpath =
    "//h2[@class='sc-ivTmOn jYMFSu']";
}
