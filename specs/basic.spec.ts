import { test, expect } from '@playwright/test';
import { Link1Page } from './pageObjects/Link1Page';
import { Link2Page } from './pageObjects/Link2Page';

test("/link1でフラグを立てた後に/link2に遷移するとクラッシュする", async ({page}) => {
  await page.goto('http://localhost:5173/');
  const link1Page = new Link1Page(page);
  await link1Page.goto();
  await link1Page.toggleFlag();
  const link2Page = new Link2Page(page);
  await link2Page.goto();
  expect(await link2Page.getFooText()).toBe("フーが表示されています！");
});
