import { test, expect } from "@playwright/test";

test("index", async ({ page }) => {
  await page.goto("https://conversionxli.warmpress.com/", {
    waitUntil: "networkidle",
  });

  expect(await page.locator('cxl-app-layout').screenshot()).toMatchSnapshot("index.png");
});
