export class SignupPageLocators {
  static readonly pageHeaderXpath = "//h2[@data-testid='header']";

  static readonly firstNameFieldXpath =
    "//input[@aria-invalid='false'] [@data-testid='first-name']";
  static readonly lastNameFieldXpath =
    "//input[@aria-invalid='false'] [@data-testid='last-name']";
  static readonly emailFieldXpath =
    "//input[@aria-invalid='false'] [@data-testid='email']";
  static readonly passwordFieldXpath =
    "//input[@aria-invalid='false'] [@data-testid='password']";
  static readonly confirmPasswordFieldXpath =
    "//input[@aria-invalid='false'] [@data-testid='confirm-password']";

  static readonly signupButtonXpath = "//span[@class='MuiButton-label']";

  static readonly doYouHaveAccountButtonXpath = "//h2[@data-testid='go-login']";
}
