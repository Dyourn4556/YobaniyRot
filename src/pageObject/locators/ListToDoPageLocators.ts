export class ListToDoPageLocators {
    
    static readonly listToDoPageHeaderXpath: string = "//h2[@data-testid='welcome']";
    static readonly logoutButtonXpath: string = "//span[@class='MuiButton-label']";
    static readonly addNewToDoButtonXpath: string = "//span[@class='MuiIconButton-label']";

    static readonly markedLikeDoneToDoCheckBoxXpath: string = "//div[@class='sc-breuTD fkEinw'] //span[@aria-disabled='false'] //span[@class='MuiIconButton-label']";
    static readonly unmarkedLikeDoneToDoCheckBoxXpath: string = "//div[@class='sc-breuTD dIVhJd'] //span[@aria-disabled='false'] //span[@class='MuiIconButton-label']";
    static readonly deleteToDoButtonXpath: string = "//button[contains(@class, 'MuiButtonBase-root') and contains(@data-testid, 'delete')] //span[contains(@class, 'MuiIconButton-label')]";

    static readonly availableToDoXpath: string = "//div[@data-testid='todo-item']";

    static readonly noAvailableToDo: string = '//h4[@data-testid="no-todos"]';

    /*Create new ToDo Modal*/
    static readonly createNewToDoModalHeaderXpath: string = "//h2[@data-testid='sub-header']";
    static readonly createNewToDoFieldXpath: string = "//input[@class='MuiInputBase-input MuiOutlinedInput-input']";
    static readonly createNewToDoButtonXpath: string = "//button[@data-testid='submit-newTask']";
    static readonly goBackToToDoListButtonXpath: string = "//h2[@class='sc-ivTmOn jYMFSu']";
} 