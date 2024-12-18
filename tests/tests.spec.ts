import { test } from '../fixtures/basePage';
import { expect } from '@playwright/test';

test.describe('QE Test Suite', () => {
  test.beforeEach(async ({ qePage }) => {
    // Load local test file for each test
    await qePage.page.goto(
      'file://C://Users//AtulSharma//Downloads//Repos//PW//Resolver//QE-index.html'
    );
  });

  test('Test 1: Login functionality', { tag: '@fast' }, async ({ qePage }) => {
    await expect(qePage.emailInput).toBeVisible();
    await expect(qePage.passwordInput).toBeVisible();
    await expect(qePage.signInButton).toBeVisible();

    await qePage.emailInput.fill('test@example.com');
    await qePage.passwordInput.fill('password123');
  });

  test('Test 2: List assertions', async ({ qePage }) => {
    await expect(qePage.listItems).toHaveCount(3);

    const secondItem = qePage.listItems.nth(1);
    await expect(secondItem).toContainText('List Item 2');
    await expect(secondItem.locator('span')).toHaveText('6');
  });

  test('Test 3: Dropdown selection', async ({ qePage }) => {
    await expect(qePage.dropdownButton).toHaveText('Option 1');

    await qePage.dropdownButton.click();
    await qePage.option3.click();
    await expect(qePage.dropdownButton).toHaveText('Option 3');
  });

  test('Test 4: Button states', async ({ qePage }) => {
    await expect(qePage.firstButton).toBeEnabled();
    await expect(qePage.secondButton).toBeDisabled();
  });

  test('Test 5: Dynamic button', async ({ qePage }) => {
    await qePage.dynamicButton.waitFor({ state: 'visible' });
    await qePage.dynamicButton.click();

    await expect(qePage.successMessage).toBeVisible();
    await expect(qePage.dynamicButton).toBeDisabled();
  });

  test('Test 6: Table cell value', { tag: '@fast' }, async ({ qePage }) => {
    const cell = await qePage.getCellValue(2, 2);
    await expect(cell).toHaveText('Ventosanzap');
  });
});
