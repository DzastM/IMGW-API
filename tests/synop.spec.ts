import { test, expect } from "@playwright/test";
import { Synop } from "./pages/Synop";

test.describe("Synoptic data", () => {
  let synop: Synop;

  test.beforeEach(async ({ request }) => {
    synop = new Synop(request);
  });

  test("Retrieve all stations information", async () => {
    const stations = await synop.retrieveAllStationsInfo();
    synop.getFaultyData(stations);
  });

  test("Retrieve data of station Kraków", async () => {
    await synop.retrieveStationInfo("Kraków");
  });
});
