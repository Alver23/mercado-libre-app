/* eslint-disable camelcase */
export interface ICity {
  name: string;
}

export interface ICountry {
  id: string;
  name: string;
}

export interface ISearchLocation {
  city: ICountry;
  state: ICountry;
}

export interface ISellerAddress {
  city: ICity;
  state: ICountry;
  country: ICountry;
  search_location: ISearchLocation;
  id: number;
}
