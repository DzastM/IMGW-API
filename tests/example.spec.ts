import { test, expect } from '@playwright/test';
import { Synop } from './pages/Synop';

test('Retrieve all stations information', async ({ request }) => {
  const synop = new Synop(request);
  const stations = await synop.retrieveAllStationsInfo();

  console.log(stations);
  // stations.forEach(station => {
  //   console.log(`Stacja: ${station.stacja}, Temp: ${station.temperatura}`);
  // });
});



// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
