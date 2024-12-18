import { type Locator, type Page } from '@playwright/test';

export class QETestPage {
  readonly page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  readonly listItems: Locator;

  readonly dropdownButton: Locator;
  readonly option3: Locator;

  readonly firstButton: Locator;
  readonly secondButton: Locator;

  readonly dynamicButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    // Initialize Playwight mix of both, built in locators & css locators in the constructor
    this.page = page;
    //this.emailInput = page.locator('#inputEmail');
    this.emailInput = page.getByPlaceholder('Email');
    this.passwordInput = page.locator('#inputPassword');
    //this.signInButton = page.locator('button[type="submit"]');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.listItems = page.locator('#test-2-div .list-group-item');

    this.dropdownButton = page.locator('#dropdownMenuButton');
    this.option3 = page.locator('.dropdown-item', { hasText: 'Option 3' });

    this.firstButton = page.locator('#test-4-div .btn-primary');
    this.secondButton = page.locator('#test-4-div .btn-secondary');

    this.dynamicButton = page.locator('#test5-button');
    this.successMessage = page.locator('#test5-alert');
  }

  // Method to find cell value by coordinates (row and column start at 0)
  async getCellValue(row: number, column: number) {
    const cell = this.page.locator(
      `#test-6-div table tr:nth-child(${row + 1}) td:nth-child(${column + 1})`
    );
    return cell;
  }
}
