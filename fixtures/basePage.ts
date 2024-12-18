import { test as base } from '@playwright/test';
import { QETestPage } from '../pages/QETestPage';

type customFixtures = {
  qePage: QETestPage;
};

export const test = base.extend<customFixtures>({
  qePage: async ({ page }, use) => {
    await use(new QETestPage(page));
  },
});
