import { test, expect, request, APIRequestContext } from '@playwright/test';

test('Retrieve all stations information', async ({}) => {
  //create a new HTTP client
  const apiContext = await request.newContext();

  //get data from the API
  const response = await apiContext.get("https://danepubliczne.imgw.pl/api/data/synop");
  expect(response.ok()).toBeTruthy();

  //parse data to JSON format
  const allData = await response.json();

  const stations: any[] = [];

  //save data to stations[]
  for(const item of allData) {
    stations.push(item);
  }

  stations.forEach(station => {
    console.log(`Stacja: ${station.stacja}, Temp: ${station.temperatura}`);
  });
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
