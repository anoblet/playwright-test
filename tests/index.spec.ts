import { test, expect } from "@playwright/test";

test("index", async ({ page }) => {
  await page.goto("https://conversionxli.warmpress.com/", {
    waitUntil: "networkidle",
  });

  // Click [aria-label="Open Intercom Messenger"]
  await page
    .frame({
      name: "intercom-launcher-frame",
    })
    .click('[aria-label="Open Intercom Messenger"]');

  // Click [aria-label="Close Intercom Messenger"]
  await page
    .frame({
      name: "intercom-launcher-frame",
    })
    .click('[aria-label="Close Intercom Messenger"]');

  expect(await page.screenshot()).toMatchSnapshot("index.png");
});
