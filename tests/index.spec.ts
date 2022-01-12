import { test, expect } from "@playwright/test";

declare global {
  interface Window {
    Intercom: any;
  }
}

test("index", async ({ page }) => {
  await page.goto("https://conversionxli.warmpress.com/", {
    waitUntil: "networkidle",
  });

  page.evaluate(() => {
    window.Intercom("shutdown");
  });

  expect(await page.screenshot({fullPage: true})).toMatchSnapshot("index.png");
});
