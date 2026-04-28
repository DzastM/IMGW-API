import { APIRequestContext, expect } from '@playwright/test';

export class Synop {
  private readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async retrieveAllStationsInfo() {
    const response = await this.request.get('data/synop');
    expect(response.ok()).toBeTruthy();
    
    const allData = await response.json();
    const stations: any[] = [];

    for (const item of allData) {
      stations.push(item);
    }

    return stations;
  }
}
