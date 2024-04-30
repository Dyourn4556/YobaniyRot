export class SignupPageLocators {

    static readonly pageHeaderXpath: string ="//h2[@data-testid='header']";
    
    static readonly firstNameFieldXpath: string = "//input[@aria-invalid='false'] [@data-testid='first-name']";
    static readonly lastNameFieldXpath: string = "//input[@aria-invalid='false'] [@data-testid='last-name']";
    static readonly emailFieldXpath: string = "//input[@aria-invalid='false'] [@data-testid='email']";
    static readonly passwordFieldXpath: string = "//input[@aria-invalid='false'] [@data-testid='password']";
    static readonly confirmPasswordFieldXpath: string = "//input[@aria-invalid='false'] [@data-testid='confirm-password']";

    static readonly signupButtonXpath: string = "//span[@class='MuiButton-label']";

    static readonly doYouHaveAccountButtonXpath: string ="//h2[@data-testid='go-login']";

}