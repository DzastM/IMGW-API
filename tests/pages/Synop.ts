import { APIRequestContext, expect } from '@playwright/test';

export class Synop {
  private readonly request: APIRequestContext;
  private readonly baseAddress: string;
  private readonly allStations: string;
  private readonly oneStation : string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseAddress = "https://danepubliczne.imgw.pl/api/";
    this.allStations = "data/synop";
    this.oneStation = "data/synop/station/"
  }

  async retrieveAllStationsInfo() {
    const response = await this.request.get(this.baseAddress + this.allStations);
    expect(response.ok()).toBeTruthy();
    
    const allData = await response.json();
    const stations: any[] = [];

    for (const item of allData) {
      stations.push(item);
    }

    return stations;
  }

  async getFaultyData(stations: any[]) {
    //const stations = await this.retrieveAllStationsInfo();

    stations.forEach(station => {
        if(station.temperatura === null){
            console.log(station.stacja + ": nieprawidłowy pomiar temperatury");
        }
        if(station.cisnienie === null){
            console.log(station.stacja + ": nieprawdłowy pomiar ciśnienia");
        }
    })
  }

  async retrieveStationInfo(city: string) {
    const cityConverted = city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const response = await this.request.get(this.baseAddress + this.oneStation + cityConverted);
    expect(response.ok()).toBeTruthy();

    const cityData = await response.json();
    console.log(cityData);
  }
}
