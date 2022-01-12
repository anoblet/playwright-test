import { test, expect } from "@playwright/test";

test("index", async ({ page }) => {
  await page.goto("https://conversionxli.warmpress.com/", {
    waitUntil: "networkidle",
  });

  expect(await page.screenshot()).toMatchSnapshot("index.png");
});
