import { test, expect } from '@playwright/test';

test("/link1でフラグを立てた後に/link2に遷移するとクラッシュする", async ({page}) => {
  await page.goto('http://localhost:5173/');
  await page.locator(`text=リンク1`).click();
  await page.locator('text=フラグを立てたり下げたり').click();
  expect(await page.locator('text=フラグが上がっています').innerText()).toBe("フラグが上がっています");
  await page.locator(`text=リンク2`).click();
  const fooText = await page.locator(`text=フーが表示されています！`).innerText({timeout:1500});
  expect(fooText).toBe(`フーが表示されています！`);
});
